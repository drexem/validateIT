"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1267],{8539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(4848),s=a(8453);const r={sidebar_position:1},i="CLI Application - user documentation",l={id:"cli/user/index",title:"CLI Application - user documentation",description:"We can see all the available options for the command line application using the option --help",source:"@site/docs/cli/user/index.md",sourceDirName:"cli/user",slug:"/cli/user/",permalink:"/validateIT/docs/cli/user/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/validateIT/docs/cli/"},next:{title:"CLI Application - administration documentation",permalink:"/validateIT/docs/cli/administration/"}},o={},d=[{value:"Tabular validation",id:"tabular-validation",level:2},{value:"Metadata validation",id:"metadata-validation",level:2},{value:"Overriding validation",id:"overriding-validation",level:2},{value:"Other arguments",id:"other-arguments",level:2},{value:"--language",id:"--language",level:3},{value:"--csvPath",id:"--csvpath",level:3},{value:"--rdfPath",id:"--rdfpath",level:3},{value:"-v / --verbose",id:"-v----verbose",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"cli-application---user-documentation",children:"CLI Application - user documentation"}),"\n",(0,n.jsxs)(t.p,{children:["We can see all the available options for the command line application using the option ",(0,n.jsx)(t.code,{children:"--help"}),"\r\nand we will see output similar to this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ValidateCLI 1.0.0\r\nCopyright (C) 2024 ValidateCLI\r\n\r\n  --language       Specify the language. Available are: sk-SK (slovak language)\r\n                   or en-GB (english - default)\r\n\r\n  --tabularIRI     Either a file path to a local metadata file or URL to remote\r\n                   metadata file.\r\n\r\n  --metadataIRI    Either a file path to a local metadata file or URL to remote\r\n                   metadata file.\r\n\r\n  --csvPath        Path where csv result file should be generated.\r\n\r\n  --rdfPath        Path where rdf result file should be generated.\r\n\r\n  -v, --verbose    Wether to include more detailed statistics in the output.\r\n\r\n  --help           Display this help screen.\r\n\r\n  --version        Display version information.\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now we will take a closer look at different types of validation and how you can start them. Also we will look at how to use different CLI parameters and arguments."}),"\n",(0,n.jsxs)(t.p,{children:["So as it is described in ",(0,n.jsx)(t.a,{href:"../../general/",children:"general information"})," there are three types of validation and we will show you how to run all of them!"]}),"\n",(0,n.jsx)(t.h2,{id:"tabular-validation",children:"Tabular validation"}),"\n",(0,n.jsxs)(t.p,{children:["Look at the definition of ",(0,n.jsx)(t.a,{href:"../../general/#section-tabularValidation",children:"tabular validation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You can run remote tabular validation by invoking the validator with arguments:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--tabularIRI https://w3c.github.io/csvw/tests/test006.csv\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace the ",(0,n.jsx)(t.code,{children:"https://w3c.github.io/csvw/tests/test006.csv"})," with URL to your desired remote ",(0,n.jsx)(t.code,{children:"tabular data file"})]}),"\n",(0,n.jsx)(t.p,{children:"Alternatively similarly you can run local tabular validation by invoking:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--tabularIRI /home/user/Desktop/my.csv\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace the ",(0,n.jsx)(t.code,{children:"/home/user/Desktop/my.csv"})," with path to your desired local ",(0,n.jsx)(t.code,{children:"tabular data file"})]}),"\n",(0,n.jsx)(t.h2,{id:"metadata-validation",children:"Metadata validation"}),"\n",(0,n.jsxs)(t.p,{children:["Look at the definition of ",(0,n.jsx)(t.a,{href:"../../general/#section-metadataValidation",children:"metadata validation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You can run remote metadata validation by invoking the validator with arguments:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI https://w3c.github.io/csvw/tests/countries.json\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace the ",(0,n.jsx)(t.code,{children:"https://w3c.github.io/csvw/tests/countries.json"})," with URL to your desired remote ",(0,n.jsx)(t.code,{children:"metadata file"})]}),"\n",(0,n.jsx)(t.p,{children:"Alternatively similarly you can run local metadata validation by invoking:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI /home/user/Desktop/my_schema.json\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace the ",(0,n.jsx)(t.code,{children:"/home/user/Desktop/my_schema.json"})," with path to your desired local ",(0,n.jsx)(t.code,{children:"metadata file"})]}),"\n",(0,n.jsx)(t.h2,{id:"overriding-validation",children:"Overriding validation"}),"\n",(0,n.jsxs)(t.p,{children:["Look at the definition of ",(0,n.jsx)(t.a,{href:"../../general/#section-overridingValidation",children:"overriding validation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You can run remote overriding validation by invoking the validator with arguments:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI https://w3c.github.io/csvw/tests/countries.json --tabularIRI https://w3c.github.io/csvw/tests/countries.csv --tabularIRI https://w3c.github.io/csvw/tests/country_slice.csv\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace the ",(0,n.jsx)(t.code,{children:"https://w3c.github.io/csvw/tests/countries.json"})," with URL to your desired remote ",(0,n.jsx)(t.code,{children:"metadata file"})]}),"\n",(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"https://w3c.github.io/csvw/tests/countries.csv"})," and ",(0,n.jsx)(t.code,{children:"https://w3c.github.io/csvw/tests/country_slice.csv"})," with URLs to your desired remote ",(0,n.jsx)(t.code,{children:"tabular data files"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Alternatively similarly you can run local metadata validation by invoking:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI /home/user/Desktop/my_schema.json --tabularIRI /home/user/Desktop/my_table.csv\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace the ",(0,n.jsx)(t.code,{children:"/home/user/Desktop/my_schema.json"})," with path to your desired local ",(0,n.jsx)(t.code,{children:"metadata file"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Replace the ",(0,n.jsx)(t.code,{children:"/home/user/Desktop/my_table.csv"})," with path to your desired local ",(0,n.jsx)(t.code,{children:"tabular data file"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"other-arguments",children:"Other arguments"}),"\n",(0,n.jsx)(t.h3,{id:"--language",children:"--language"}),"\n",(0,n.jsxs)(t.p,{children:["You can change the default language that is ",(0,n.jsx)(t.code,{children:"English"})," to a ",(0,n.jsx)(t.code,{children:"Slovak"})," language using parameter:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--language sk-SK\n"})}),"\n",(0,n.jsx)(t.p,{children:"For example if you run:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json\n"})}),"\n",(0,n.jsx)(t.p,{children:"You get result:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'General results:\r\nValidation status: Warning\r\n\r\nThe textDirection property must have a single string value that is one of "ltr", "rtl", "auto" or "inherit" (the default).\r\nYour value: forwards\r\nMore about textDirecton property at:\r\nhttps://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties\r\n\r\nResults for table: https://w3c.github.io/csvw/tests/test042.csv\r\nValidation status: Valid\n'})}),"\n",(0,n.jsx)(t.p,{children:"However if you switch to a slovak language:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json --language sk-SK\n"})}),"\n",(0,n.jsx)(t.p,{children:"You get translated result:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'V\u0161eobecn\xe9 v\xfdsledky:\r\nV\xfdsledok valid\xe1cie: Varovanie\r\nV\u0161eobecn\xe9 varovania:\r\ntextDirection vlasnos\u0165 mus\xed m\xe1\u0165 stringov\xfa hodnotu jednu z:  "ltr", "rtl", "auto" alebo "inherit" (default).\r\nVa\u0161a hodnota: forwards\r\nViac o textDirection vlastnosti na:\r\nhttps://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties\r\n\r\nV\xfdsledky pre tabu\u013eku: https://w3c.github.io/csvw/tests/test042.csv\r\nV\xfdsledok valid\xe1cie: Valid\n'})}),"\n",(0,n.jsx)(t.h3,{id:"--csvpath",children:"--csvPath"}),"\n",(0,n.jsxs)(t.p,{children:["You can specify that you want to create a validation report to a file in ",(0,n.jsx)(t.code,{children:"csv"})," format using the parameter ",(0,n.jsx)(t.code,{children:"--csvPath"})]}),"\n",(0,n.jsx)(t.p,{children:"For example you can invoke:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json --csvPath /home/user/Desktop/result.csv\n"})}),"\n",(0,n.jsxs)(t.p,{children:["and afterwards you will find the validation result in format ",(0,n.jsx)(t.code,{children:"csv"})," located at path ",(0,n.jsx)(t.code,{children:"/home/user/Desktop/result.csv"})]}),"\n",(0,n.jsxs)(t.p,{children:["Change the ",(0,n.jsx)(t.code,{children:"/home/user/Desktop/result.csv"})," accordingly to satisfy your particular needs."]}),"\n",(0,n.jsx)(t.h3,{id:"--rdfpath",children:"--rdfPath"}),"\n",(0,n.jsxs)(t.p,{children:["You can specify that you want to create a validation report to a file in ",(0,n.jsx)(t.code,{children:"rdf"})," format using the parameter ",(0,n.jsx)(t.code,{children:"--rdfPath"})]}),"\n",(0,n.jsx)(t.p,{children:"For example you can invoke:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json --rdfPath /home/user/Desktop/result.ttl\n"})}),"\n",(0,n.jsxs)(t.p,{children:["and afterwards you will find the validation result in format ",(0,n.jsx)(t.code,{children:"rdf"})," located at path ",(0,n.jsx)(t.code,{children:"/home/user/Desktop/result.ttl"})]}),"\n",(0,n.jsxs)(t.p,{children:["Change the ",(0,n.jsx)(t.code,{children:"/home/user/Desktop/result.ttl"})," accordingly to satisfy your particular needs."]}),"\n",(0,n.jsx)(t.h3,{id:"-v----verbose",children:"-v / --verbose"}),"\n",(0,n.jsxs)(t.p,{children:["You can turn on more detailed validation report by invoking parameter ",(0,n.jsx)(t.code,{children:"--verbose"})," or its short version ",(0,n.jsx)(t.code,{children:"-v"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"For example you can run non-verbose version:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json \n"})}),"\n",(0,n.jsx)(t.p,{children:"and get result:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'General results:\r\nValidation status: Warning\r\n\r\nThe textDirection property must have a single string value that is one of "ltr", "rtl", "auto" or "inherit" (the default).\r\nYour value: forwards\r\nMore about textDirecton property at:\r\nhttps://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties\r\n\r\nResults for table: https://w3c.github.io/csvw/tests/test042.csv\r\nValidation status: Valid\n'})}),"\n",(0,n.jsx)(t.p,{children:"Or you can run verbose version:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json --verbose\n"})}),"\n",(0,n.jsx)(t.p,{children:"and get result:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'General results:\r\nValidation status: Warning\r\nStatistics:\r\nValidated tables: 1\r\nUsed metadata: https://w3c.github.io/csvw/tests/test042-metadata.json\r\n\r\nThe textDirection property must have a single string value that is one of "ltr", "rtl", "auto" or "inherit" (the default).\r\nYour value: forwards\r\nMore about textDirecton property at:\r\nhttps://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties\r\n\r\nResults for table: https://w3c.github.io/csvw/tests/test042.csv\r\nValidation status: Valid\r\nStatistics:\r\nValidated rows: 1\r\nValidated columns: 10\r\nValidated cells: 10\n'})}),"\n",(0,n.jsx)(t.p,{children:"This verbose version contain additional information like number of validated rows, columns and cells..."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var n=a(6540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);