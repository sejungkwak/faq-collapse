# FAQ Collapse

<img width="1412" alt="Screenshot 2021-03-14 at 00 26 52" src="https://user-images.githubusercontent.com/71224770/111053473-07f0a080-845c-11eb-8671-bd569edcb90a.png">


#### project notes

1. HTML
- h: Frequently Asked Questions
- div*5

2. CSS
- background-image: fontawesome using unicode when expanded
- box-shadow

3. JavaScript
- click event

> Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'


#### Takeaways from the instructor

1. HTML
- fontawesome icons inside button tag and class="toggle"

2. CSS
- no flexbox
- set transition
- __overflow: hidden__ to hide bubble outside div
- properties controlled with active class

3. JavaScript
- __parentNode__
```
const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})
```
