---
title: Custom Hooks in React
description: Bundle common state and lifecycle patterns and expose only what you need!
topic: coding
date: 06/11/21
published: true
heroImg: demo.png
---

# Custom Hooks in React

I first learnt React using classes and the `this.setState()` pattern that was in use up until React 16.

For me Hooks made it far easier to handle multiple states in a single component and simplified the `componentDidUpdate` lifecycle with `useEffect`.

Creating custom hooks felt like something that would be difficult to grasp but it's more straight forwards than you might think!

---

Lets start with a straight forward component that is making an API request on mount using a `user_id` that has been passed in as a prop.

```jsx
import { useState, useEffect } from 'React';
import * as api from '../api.js';

const UserCard = ({ user_id }) => {
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		api.getUserInfo(user_id).then((user) => {
			setUserInfo(user);
		});
	}, [user_id]);

    return (
        // UI...
    )
};
```

Cool! So this:

1. Fetches user data on mount and whenever the user_id changes
2. Uses `userInfo` to store that data
3. Uses `setUserInfo` to handle state updates and trigger a re-render when new user data is put into state.

Now imagine we are wanting to repeat this behaviour elsewhere in our code

```jsx
import { useState, useEffect } from 'React';
import * as api from '../api.js';

const ProfileDropdown = ({ user_id }) => {
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		api.getUserInfo(user_id).then((user) => {
			setUserInfo(user);
		});
	}, [user_id]);

    return (
        // different UI...
    )
};
```

Yes I did just copy-paste that in. Yes it's not DRY!

If any changes are made to our backend that impacts how we'd fetch the data from the frontend we'd have to change our code in two places 😩

Lets extract this logic into a custom hook.

1. Make a function
2. Put all state and lifecycle logic you want to use
3. return only what you need!
4. export the function so it can be reused wherever!

```js
// src/hooks/useUserInfo.js
import { useState, useEffect } from 'React';
import * as api from '../api.js';

const useUserInfo = (user_id) => {
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		api.getUserInfo(user_id).then((user) => {
			setUserInfo(user);
		});
	}, [user_id]);

	return userInfo;
};

export default useUserInfo;
```

Notice how we are only exposing the `userInfo` out of this custom hook? Put in `user_id`, get out `userInfo` - that's simple!

We can now use it anywhere we want and don't have to double check how we've implemented it elsewhere.

```jsx
import useUserInfo from '../hooks/useUserInfo';

const UserCard = ({ user_id }) => {
	const userInfo = useUserInfo(user_id);

    return (
        // UI...
    )
};

// elsewhere...
import useUserInfo from '../hooks/useUserInfo';

const ProfileDropdown = ({ user_id }) => {
	const userInfo = useUserInfo(user_id);

    return (
        // different UI...
    )
};
```

I'm a big fan though there are some potential downsides to be considered before you start extracting and abstracting your hooks.

**Pros:**

- Less code in components
- Can reuse common patterns across an application

**Cons**

- Abstractions obstruct the implementation and "`useUserInfo`" doesn't give a good indication on how it works behind the scenes
- Could be difficult to allow variations on the behaviour

---

Here's one slightly more complex example

We're building a marketplace and want to create a custom hook to handle fetching of items, filtering by category as well as provide `loading` and `error` patterns

```js
import { useEffect, useState } from 'react';
import * as api from '../utils/api';

const useMarketplaceItems = (selectedCategory) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isErrored, setIsErrored] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		api
			.getItems(selectedCategory)
			.then((items) => {
				setItems(items);
				setIsLoading(false);
				setIsErrored(null);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsErrored(err);
			});
	}, [selectedCategory]);

	return { items, isLoading, isErrored };
};

export default useMarketplaceItems;
```

Here we're returning an object with the `items` as well as `isLoading` and `isErrored`

Everything is handled in our custom hook and all we need to do is consume it wherever we want!

```jsx
import uesMarketplaceItems from '../hooks/useMarketplaceItems';

const ItemsList = () => {
	const [selectedCategory, setSelectedCategory] = useState('seasonal');
	const { items, isLoading, isErrored } = useMarketplaceItems(selectedCategory);

    return (
        // UI here...
    )
};
```
