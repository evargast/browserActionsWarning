# Browser Navigation Warning

<a href="https://www.npmjs.com/package/browser-navigation-warning">
    <img alt="npm" src="https://img.shields.io/npm/v/browser-navigation-warning.svg?style=flat-square">
</a>

<a href="https://www.npmjs.com/package/browser-navigation-warning">
    <img alt="npm" src="https://img.shields.io/npm/dt/browser-navigation-warning?style=flat-square">
</a>

_Helpful utility function that will trigger the browsers default pop-up before navigating away._

![Reload warning screenshot][reload]
![Leave warning screenshot][leave]

## Installation

```javascript
npm install -D browser-navigation-warning
```

## Usage

This function takes in one parameter, `trigger` (boolean) - this sets whether the navigation warning should be enabled/disabled.

> `trigger = true` will not trigger the alert immediately.<br/>
> It **enables** the alert which will only be triggered when the user tries to use a browser action such as _refresh_, _previous page_ or _next page_.

<br/>

### Static - always enabled

To have the warning enabled in all your pages, add the line below in the root file of your application (Usually `App`).

Otherwise, add the line below to the specific pages / components you want to have the warning enabled.

```javascript
import triggerBrowserWarning from 'browser-navigation-warning';

triggerBrowserWarning(true);
```

<br/>

### Dynamic - conditionally enabled

Add the snippet below to your target page / component. `trigger` is your dynamic boolean conditional that decides whether the warning should be displayed or not.

React example:

```javascript
import triggerBrowserWarning from 'browser-navigation-warning';

useEffect(() => {
  triggerBrowserWarning(trigger);
}, [trigger]);
```

[> More info on useEffect here <](https://reactjs.org/docs/hooks-effect.html)

<br/>

## FAQ:

##

**Q:** Can I have my own custom dialog or custom text?

**A:** Nope, unfortunately browsers stopped supporting custom alert messages for navigation

<br/>

**Q:** I've got an idea to improve this function, how can I get it to you?

**A:** Awesome! Check the contributing section below!😄

<br/>

## Contributing

[PRs](https://github.com/evargast/browserNavigationWarning/pulls) are welcome!

[Issues](https://github.com/evargast/browserNavigationWarning/issues) are also welcome!

[reload]: https://raw.githubusercontent.com/evargast/browserNavigationWarning/master/readme-assets/reload.png
[leave]: https://raw.githubusercontent.com/evargast/browserNavigationWarning/master/readme-assets/leave.png
