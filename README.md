# Music Project

### Project 1 with Code Institute 
#### Rebecca Manning

Starting my first project having begun the course with no computer science background or coding knowledge, this was one of my biggest challenges!

----------------
### SWING/JIVE
#### What the project does, needs it fulfills & functionality

I created a website for a Swing/Jive band located in Dublin that mainly focus on playing at Wedding or Corporate events but also play at various concerts. This meant the design for the website had to be for various different clients. There is a page to display information about the band members in a sophisticated manner to suit the corporate and weddings feel. 

I made sure that the Listen page was interactive which allowed the User to really enjoy their time on the site and experience the music and feel of the band. With the click of an album button you can play whatever music you feel like. You can even head over the the Itunes search to search and play previous band's music! There are options for the latest video to watch and latest gallery pictures with a slick and easy to use design.

The Booking page allows the user to purchase tickets or find out details about booking events. As we weren't allowed to use any backend work and there is no database, I chose to tell the user the tickets are sold out (with jQuery) when the form is submitted. I also used a similar approach with the contact page forms. The contact page allows users to subscribe to a mailing list or send in a query.

----------------
### TECHNOLOGIES

* Bootstrap
* FlexBox
* CSS
* HTML
* JavaScript
* jQuery
* Angular JS

----------------
### DEMO

**Github** - https://bmanning1.github.io/swing-jive

----------------
### TESTING

* https://validator.w3.org/ - checked any errors and sorted them if needed.
* I frequenty asked friends, family and peers to have a look trhough my website and give feedback on code, functionality or aesthetics that could be improved. My mum is very much into Swing and Jive dancing so she was a great help and even appears in one of the pictures on the home page!
* I constantly tested the website on different browsers as well as different size screens (Explained more below).
* Manual testing
    * I used the Google Chrome developer tools to test my website on various different screen sizes. I then confirmed this by testing it on my Iphone6, friends' Iphone5, Ipads and Laptops. I made sure the everything would fit properly on mobile display like creating icons for the options footer to save room. I used a lot of flex design to wrap div boxes on smaller screens. I also hid certain elements to save room, for example I hid the large album on the listen page for mobile display.
    * I downloaded different browsers; Firefox, Chrome and Internet Explorer to test my site on. I also viewed the site from a macbook to test safari.
    * The links were tested to see that they guide the user to the right area.
    * The social media icons at the top of the page were clicked to see that they don't take the user anywhere (as no account), but do not produce errors.
    * I tested the animation of the home title on various screens and made sure it all worked. The only problem I couldn't fix was the title disappearing on mobile display when you turn the phone. If I had more time I would look into this properly.
    * I tested the buttons on the meet page to check that they all do what they're supposed to. I realised that at one point you couldn't click a name, scroll back up and click it again. I managed to fix this as it was to do with something being caught on an 'a' tag. 
    * I checked that all the jQuery worked by checking those particular areas. For example I checked that the music would stop when you click a different album. I also checked if you watch the video and the other music playing would stop. 
    * Both bootstrap carousels proved to work perfectly, I tested them using all the buttons. I previously found that a button on one wasn't working as it was getting caught on a tag, but have since fixed this.
    * I tested the ITunes API by searching various artists and playing the music and seeing if the right artist and song appeared. I also tried search for nothing and made sure it tells the user to enter something.
    * I tested the forms on the contact page and booking page by clicking submit without filling it and getting told to fill it in. I also tested that when they were filled in correctly, they would tell the user that either the tickets are sold out or the form was successfull.  

----------------
### CREDIT

* Itunes API search code: In the Itunes controller and the Itunes directive.
* Bootstrap Carousel code
* [Textillate](http://textillate.js.org/)
* Credit to Code Institute as it is the course I am taking - I have showed in my annotation that I understand it all and also personalised it a lot to my needs. I used it to follow methods on how to build up a site using Angular JS.
* Images were sourced from Pixabay (a free royalty-free images site) or created myself.

----------------
### CHALLENGES
#### What was kept/changed to fit my need

* My main aim for this project was interactivity and animation to allow the user to have an interesting and fun experience. I used breathing buttons on the listen and meet pages as well as adding a slick design to the listen tab on the listen page. 
* A struggle I came across was making the text on the home page animated. It was a great deal of trouble trying to get the footer to slide up to the right amount and back down when certain buttons are clicked. It was also hard to get the title to animate correctly. Although it is not as smooth as I had hoped for, I managed to get it to work! One trouble I am still faced with is that the title dissapears on mobile display when you turn the phone (if I had more time I would have looked into this). 
* I aimed for a landscape design to the site as I felt it suited the up-market design I needed. This proved a struggle with the change to portrait focussed mobile or ipad design. One of the ways I tackeled this was to use icons instead of the navigation options to save room when displaying on a mobile.
* As my first project and also my first attempt at coding, I found it hard getting the hang of parts so extra revision was needed. I now look back and can see how I made parts more complicated than it needed to be!
* Although it was a mission mixing the Corporate designs, Wedding themes and a fun Swing Jive band, I loved it! I went with a deep colour purple theme to represent a mixture between the weddings and corporate seriousness as well as brightening it for the fun Swing Jive band. I kept a slick feel for the upmarket events and then things like the animation and breathing buttons show the fun, entertaining side of the band.
* Working with Angular Directives was of great use to me in this project. On the Listen page I required a lot of code for each different panel. So being able to create a directive for the Itunes Search and the Photo Gallery proved extremely useful to save space.
* One of my worst areas on this project was my uploads to git. I should have named them to explain more about what each upload was for. I realise the importance of this looking back, however as my first project I did not think about it.

----------------
### PROJECT BRIEF
#### Code Institute

**Create A Website For A Band**

* Build a static (front-end only) website for a band. As a starting point, you may want to use wireframes, as we did in the UX lesson. You can use either your own assets or the assets in the following GitHub repo (https://github.com/Code-Institute-Org/project-assets).

* The band is a 1960’s rock band and have around 50 years experience of performing live at numerous events around the world. You have been given the following requirements after interviews with the client’s representatives:

* Their primary target audience are their fans and potential fans who wish to use the site to see and hear clips from their back catalogue, and any new material as it becomes available.

* In addition, the band would like to use the site to showcase their music and publicise their availability to perform at events such as weddings and Christmas parties.

* The band has provided you, the developer, with the following assets that they would like to showcase on their website:
  * Photos of the band members
  * A video clip
  * Audio clips

* The band would also like to publicise upcoming gigs in the future. They would like users to be able to contact them with potential work related leads. The site should contain the ability to check on the band’s availability for future bookings and costs associated with various types of booking. To do this the band would like you to create a contact form which will take all of the details, such as, name, email, date, event type. Based on this data, the site will inform the user whether or not the date is available and the cost estimate for the event. All of this should be done using client-side JavaScript (no backend.)

* In addition, they are in the process of creating a social media presence and would like to add links to their Facebook, Twitter and YouTube pages.

**Create Your Own Project (Recommended)**

* If you choose to create your own project, the scope should be similar to that of the example brief above. If you want some ideas, please ask your mentor for advice and direction.

-----------------
### PROJECT GUIDELINES
#### Code Institute

* Create a website of around 4-5 pages, or (if using a single scrolling page) these should be separate page areas

* Incorporate main navigation and grid layout (you might want to use Flexbox or Bootstrap to accomplish this)

* Include at least one form with validation. Since you are not expected to build a backend for the project, all this form needs to do is inform the user of whether or not the data was submitted successfully (i.e. passed validation)

* Use semantic HTML5 markup.

* Make sure your site is as responsive as possible. You can test this by checking the site on different screen sizes and browsers.

* The site should contain your own custom JavaScript logic – include at least one interactive component on your site that is based on non-trivial javascript logic. You can write this logic either inside an Angular controller/service, or in a separate js file.

* Write a README.md file for your project that explains what the project does and the need that it fulfills. It should also describe the functionality of the project, as well as the technologies used. Detail how the project was deployed and tested and if some of the work was based off other code, explain what was kept and/or how it was changed to fit your need. A project submitted without a README.md file will FAIL.

* Use Git & GitHub for version control. Each new piece of functionality should be in a separate commit.

* Deploy the final version of your code to a hosting platform such as GitHub Pages.

-----------------
### FINAL NOTES

I would just like to mention that the reason the github uploads are not spread out more evenly is because I've also been in my final year at Universtiy so have been working on this course when I haven't had exams or coursework.
