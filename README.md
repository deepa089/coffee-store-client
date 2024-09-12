# rakib sandbox-css
----------------------------------
https://krhasan.github.io/sandbox-CSS/page-image.html

# rakib sandbox-react
----------------------------------
https://sandbox-react-documents.web.app/front-end-with-react

# mongoDB 
https://www.mongodb.com/docs/drivers/node/current/usage-examples/

# create project from cmd 
npm create vite@latest my-project-name -- --template react

# install vite only 
npm i vite

# install tailwind with vite 
https://tailwindcss.com/docs/guides/vite

# free online images to download
Unsplash: https://unsplash.com/
Pexels: https://www.pexels.com/
Pixabay: https://pixabay.com/
Freepik: https://www.freepik.com/

# upload or hosting free images link
https://imgbb.com/
https://imgsafe.org/
https://imgur.com/

# to add react icons 
https://react-icons.github.io/react-icons/search/#q=doll
 // click the icon and follow the instruction 


# install tailwind in project
---------------------------------
https://tailwindcss.com/docs/guides/vite

# know about tailwind 
-----------------------
https://tailwindcss.com/


# know about daisy UI components 
https://daisyui.com/components/

# install daisy UI in project
----------------------------------
https://daisyui.com/docs/install/

to disable require's error -->> (eslint.config.js) >>  {browser: true, es2020: true, node : true},

# for react icons 
-----------------
npm install react-icons --save

# install chart
---------------
npm install recharts

# react shortcut jsc file write :
------------------------------------
1. Need to install React Extension Pack(Rajbir Jawanda) / Reactjs Code Snippets(\charalampos karypidis)
2. on .jsx file type >> rsc

# to disable prop-types from any components :
-------------------------------------------
1. .eslintrc.cjs >> rules >>  "react/prop-types":false  

1. function calling without paremeter through button -> 
<button onclick={handlerCalling}> </button>

2. function calling with paremeter through button -> 
<button onclick={() => handlerCalling(params)}> </button>


# How to remove underline through proptypes:
------------------------------------------------
// goto terminal and run the command : npm install prop-types

goto terminal and run the command : npm install --save prop-types

# import PropTypes for jsx file 
-------------------------------
import PropTypes from 'prop-types';

# for react icons 
-----------------
npm install react-icons --save

# install chart
---------------
npm install recharts

# to see many chart
---------------------
https://recharts.org/en-US/guide/installation
https://recharts.org/en-US/examples

# react router tutorial
---------------------
https://reactrouter.com/en/main/start/tutorial
```js
// npm install react-router-dom # always need this!
npm install react-router-dom localforage match-sorter sort-by //  only for 1 command this tutorial.
npm run dev

````

# react router set 
```js
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  //   {
          //     path: "/donations",
          //     element: <Donations></Donations>,
          //     loader: () => fetch("/donation.json"),
          //   },
          //   {
          //     path: '/update/:id',
          //     element: <Update></Update>,
          //     loader: ({params}) => fetch('http://localhost:5000/users/$ {params.id}')
          //   },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
```
# load dummy data from json placeholder
--------------------------------------------
https://jsonplaceholder.typicode.com/

# CSS >> button alignment thorugh verticallyh with each column 
# and create spance between childDiv and button 
see the link : https://web.programming-hero.com/web-8/video/web-8-44-5-responsive-pricing-card-with-tailwind-and-hero-icons
'
    <div id=parentDiv className="flex flex-col">
        <div id=childDiv classNAme="flex-grow"> 
            <p> i am in child div which you want 
                vertically align or need space  with all other cols . 
            </p> 
        </div>
        <button> try me </button>

     </div>
'

# react toastify // messeage showed
https://fkhadra.github.io/react-toastify/installation/
npm install --save react-toastify



# build project command netlify
npm install -g serve
npm run build

# netlify when page on found for refreshing
 >> 1. in dist floder >> create file named '_redirects'
 >> 2. write this code in that file 
 /*  /index.html  200

# dynamic background color
```
 style={{ backgroundColor: `${category_bg}`}}
```

# install firebase 
npm install firebase

# current date time for react 
https://momentjs.com/docs/#/displaying/

npm install moment --save

# for using slider visit (react marquee)
https://www.react-fast-marquee.com/


# node express visit https://expressjs.com/
for install --> npm install express --save

 /** 
  for all answer yes you need to write npm init -y instead of npm init
 * 
# automatically restart node application after saving anything in the project (use nodemon)
visit : https://www.npmjs.com/package/nodemon
and for install use command --> npm install -g nodemon

# form submit function 
```js
  handleOnSubmitForm =(e) => {
    e.preventDefault();
    const form = event.target ;
    const name = form.name.value;
    const email = form.email.value;
  
    const user = {name, email}

   // this fetch for pass data thorugh API
    fetch("http://localhost:5000/users", {
    method : 'POST',
    header: {
      'content-type' : 'application/json'
     },
    body:JSON.stringify(user)
    })
    .then(res=>res.JOSN())
    .then(data=>{
    console.log("data saved")})
  }
```




