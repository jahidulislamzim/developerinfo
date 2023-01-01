
<div align="center">

<img src='https://raw.githubusercontent.com/jahidulislamzim/imageData/main/Developerinfo/DeveloperInfo.png'  alt='JavaScript Coding Challenges jahidul islam zim' id='header'/>

</div>


<h1 align="center" >DEVELOPERINFO</h1>
<h6 align="center" >An open source portfolio project.</h6>

## Demo


<div align="center">

<img src='https://raw.githubusercontent.com/jahidulislamzim/imageData/main/Developerinfo/final%20project-01.jpg'  alt='JavaScript Coding Challenges jahidul islam zim' id='header'/>

</div>




## Installation and Customization Guide




Clone the project

```bash
  git clone https://github.com/jahidulislamzim/developerinfo.git
```

Go to the project directory


```bash
 cd developerinfo
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
Customize data

```bash
 Change your data from developerinfo > src > data > data.js file
```
Customize images and resume
  
```bash
 Replace the picture under developerinfo > src > Assets.

if you change profile Picture then change image from MyPicture folder and change your file name with file extention (.png .svg etc) data.js file.


You may update all of your photos and resume in this manner.
```  


customize contact me section

```bash
 Open accoutn in https://www.emailjs.com 
```

```bash
add new service from 'Add Service' and add gmail
```

```bash
Create a new template and copy template from here
```

```bash
Email Subject: 
New message from {{name}}

Replay to : 
{{email}}

Email Body: 

Hello!

You got a new message from {{name}}:

{{message}}

Best wishes,
{{name}}
{{email}}
```

```bash
Copy your template id, service id and public id And replace in data.js file contact section.
```

```bash
Congratulation You Are done!
```

Build And Deploy
```bash
 npm run build
```

Copy build folder and deploy your site and enjoy. You can deploy your site in netlify.

# Note
If you're having trouble understanding the procedure, watch the video guide.