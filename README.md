# Pre-work - *Memory Game*

**Marvelous Multichromatic Musical Memory Match** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Patricia Dzwill**

Time spent: **20** hours spent in total

Link to project: (https://glitch.com/edit/#!/meadow-stone-salesman)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!

I added numbers to the buttons to aid readability to make it more accessibile and
I added a feature that allows the player to tap the corresponding numbers on the
keyboard to activate the button, which was also for the purpose of making this
more accessible.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

The first three are a playthrough of all 8 rounds.  This demonstrates both hitting the buttons with the mouse and the keyboard.
![Part 1 of playthrough](https://cdn.glitch.global/22e0e08b-767b-40e4-9bb5-a77b49d652eb/part%201.gif?v=1648698226332)
![Part 2 of playthrough](https://cdn.glitch.global/22e0e08b-767b-40e4-9bb5-a77b49d652eb/part%202.gif?v=1648698227774)
![Part 3 of playthrough](https://cdn.glitch.global/22e0e08b-767b-40e4-9bb5-a77b49d652eb/part%203.gif?v=1648698229665)
![Part 4 of playthrough](https://cdn.glitch.global/22e0e08b-767b-40e4-9bb5-a77b49d652eb/part%204.gif?v=1648698231584)

This one is losing the game.
![Losing the game](https://cdn.glitch.global/22e0e08b-767b-40e4-9bb5-a77b49d652eb/lose.gif?v=1648699000447)

This demonstrates the use of the start and stop buttons.
![Using the start and stop button](https://cdn.glitch.global/22e0e08b-767b-40e4-9bb5-a77b49d652eb/start%20stop.gif?v=1648698234858)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used Stack Overflow, w3schools, geeksforgeeks, programminghead, mozilla, keycode.info, and a few other websites for small questions like byte archer and tumult forums.

2. What was a challenge you encountered in creating this submission (be specific)? 
How did you overcome it? (recommended 200 - 400 words)

I encountered a challenge when I finished the required steps and now it was my turn 
to implement my first of the optional features.  I knew the first thing I wanted to 
try was to spruce up the buttons, but now that I was doing something on my own for 
the first time in HTML, JavaScript, and CSS without the guidance to the degree I was 
given for the basic steps, I found it a challenge to learn how to implement this 
feature in the way I envisioned.  I encountered one problem after another as I 
implemented it.  First, I struggled to put the image inside the button, then when 
I did, it showed up when the button was both pressed and not pressed and I only 
wanted it to show when it was pressed.  When I finally fixed that, I had to figure 
out what to do to give it a colorful background, as it was showing up with its 
transparent background I left when I created the image.  The way I solved these 
problems was pretty straightforward: I did some research online.  For every problem 
I encountered, I did some research on the types of commands I was looking for and 
what other people did to solve similar problems.  When I couldn’t find a solution 
I was looking for, I worked within my constraints to create a solution that was 
even better.  For example, when I couldn’t figure out how to set a flat color onto 
a button and then overlay a transparent .png file, I went and made a background for 
the image in an art program.  When I did this, I used an art program I was used to 
and I understood all its tools, so I applied my skills in that to make a more dynamic 
background that looks better than the color that I would have used in my original plan.
Along  the way throughout the challenges I faced and the research I did to overcome them,
I learned better how to phrase questions I had and I learned more about related topics 
I encountered in my research.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

After completing my submission, I’m wondering about some of the more advanced 
features added to other websites both functionally and graphically.  I wonder 
how features like logins, user accounts, and connections to servers and other 
websites are done in web development?  And I wonder if the way I implemented 
things like buttons and headers are the same as the way these things are implemented 
on bigger websites, like social media and educational platforms?  Professional 
websites all seem so sleek and well put together so it makes me wonder if they 
use the same basic tools I did, and exactly what tools and practices they use 
that help optimize the websites they make?  I also wonder about what it takes to 
host a website all by myself without the aid of a website like Glitch?  And I would 
like to learn how to make multiple web pages within one website and if they are 
in the same HTML, CSS, and JavaScript code through different web pages on one 
website?  Overall, I wonder about how professionals can use the same tools I used 
for this website to create such sleek and refined websites.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had a few more hours to work on this, I would focus on refining my current 
functions, adding ones that I did not have time for, and making the website more 
graphically pleasing.  I am aware that the buttons can be a bit finicky, specifically 
if they are pressed very quickly, more than one button is pressed at once, or if they 
are pressed while the pattern is being played back for the user.  This can result in 
incorrect guesses being counted towards the player or sometimes it leaves the buttons 
lit up.  If I had more time, I would try to fix this issue so these problems would 
not arise.  Additionally, while I’m happy with how the sound clips came out, if I had 
more time, I would try to refine them so they sounded a little more uniform to each 
other.  Second, I would add the ticking clock feature.  I tried to include it, and I 
managed to get a clock that would tick, but it was very glitchy and I felt my time 
would be better spent on other parts of the pre-work rather than fixing this, but I 
would love to get that up and running if I had more time.  Lastly, I would love to 
make the website more graphically pleasing by making the picture under the title sharper
and by creating and adding more images to make it more creative overall.  
Additionally, the website is not optimal for use on mobile visually, so 
I would love to spend some time improving that.


## Additional note:
I noticed that when this website is played on a browser with certain extensions
(in my case, it was the Malwarebytes extension), the pictures and audio don't work.
So if you for some reason have that trouble that should be why!


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/67a47c44f5e846c19ce797ec8109f1a8)


## License

    Copyright Patricia Dzwill

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.