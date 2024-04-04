"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7318],{7407:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(4848),n=t(8453);const r={sidebar_position:3},s="Library - developer documentation",l={id:"lib/developer/index",title:"Library - developer documentation",description:"Here you can find all that you need if you want to continue the development of the Validator library or to",source:"@site/docs/lib/developer/index.md",sourceDirName:"lib/developer",slug:"/lib/developer/",permalink:"/docs/lib/developer/",draft:!1,unlisted:!1,editUrl:"https://gitlab.mff.cuni.cz/kolcunm/csv-validator/docs/lib/developer/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Library - administration documentation",permalink:"/docs/lib/administration/"},next:{title:"CLI",permalink:"/docs/cli/"}},d={},o=[{value:"Generated code documentation",id:"generated-code-documentation",level:2},{value:"General architecture",id:"general-architecture",level:2},{value:"Contents of namespaces",id:"contents-of-namespaces",level:2},{value:"ValidateLib.Control",id:"validatelibcontrol",level:3},{value:"ValidateLib.Encoding",id:"validatelibencoding",level:3},{value:"ValidateLib.ErrorsAndWarnings",id:"validateliberrorsandwarnings",level:3},{value:"ValidateLib.IRINormalization",id:"validatelibirinormalization",level:3},{value:"ValidateLib.Metadata",id:"validatelibmetadata",level:3},{value:"ValidateLib.ResultWriters",id:"validatelibresultwriters",level:3},{value:"ValidateLib.Results",id:"validatelibresults",level:3},{value:"ValidateLib.TableCompatibility",id:"validatelibtablecompatibility",level:3},{value:"ValidateLib.TabularData",id:"validatelibtabulardata",level:3},{value:"ValidateLib.UtilityClasses",id:"validatelibutilityclasses",level:3}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"library---developer-documentation",children:"Library - developer documentation"}),"\n",(0,i.jsx)(a.p,{children:"Here you can find all that you need if you want to continue the development of the Validator library or to\r\nuse it more advanced!"}),"\n",(0,i.jsxs)(a.p,{children:["Don't forget to check out the ",(0,i.jsx)(a.a,{href:"../user/",children:"user documentation"})," to get a grasp of what this library is all about!"]}),"\n",(0,i.jsx)(a.h2,{id:"generated-code-documentation",children:"Generated code documentation"}),"\n",(0,i.jsxs)(a.p,{children:["Firstly there is ",(0,i.jsx)(a.a,{href:"pathname:///generated_docs/cli/Generated/html/index.html",children:"documentation generated"})," from the source code where you can find all the classes you will be working\r\nwith."]}),"\n",(0,i.jsx)(a.h2,{id:"general-architecture",children:"General architecture"}),"\n",(0,i.jsxs)(a.p,{children:["Here you can see the general architecture design of the application:\r\n",(0,i.jsx)(a.img,{alt:"architecture",src:t(15).A+"",width:"712",height:"413"})]}),"\n",(0,i.jsxs)(a.p,{children:["This design was created in the beginning and tries to reflect ",(0,i.jsx)(a.code,{children:"single responsibility principle"})," as all of the modules should be isolated and the ",(0,i.jsx)(a.code,{children:"Controllers"})," orchestrates the communication between them. One exception are the components ",(0,i.jsx)(a.code,{children:"Tabular Data Validator"})," and ",(0,i.jsx)(a.code,{children:"Tabular Data Parser"})," which communicate between each other because we wanted to reduce the time consumed by the intermediary communication through the ",(0,i.jsx)(a.code,{children:"Controller"})," as the tabular data parsing and validation is the most time and resource consuming part of the validator."]}),"\n",(0,i.jsx)(a.h2,{id:"contents-of-namespaces",children:"Contents of namespaces"}),"\n",(0,i.jsxs)(a.p,{children:["Here you can see the individual sub namespaces of the main namespace of the validator lin = ValidateLib:\r\n",(0,i.jsx)(a.img,{alt:"architecture",src:t(1162).A+"",width:"556",height:"911"})]}),"\n",(0,i.jsx)(a.p,{children:"Now we will describe individual sub-namespaces and explain the most important classes and interfaces:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validatelibcontrol",children:"ValidateLib.Control"})})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validatelibencoding",children:"ValidateLib.Encoding"})})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validateliberrorsandwarnings",children:"ValidateLib.ErrorsAndWarnings"})})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validatelibirinormalization",children:"ValidateLib.IRINormalization"})})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validatelibmetadata",children:"ValidateLib.Metadata"})})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validatelibresultwriters",children:"ValidateLib.ResultWriters"})})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validatelibresults",children:"ValidateLib.Results"})})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validatelibtablecompatibility",children:"ValidateLib.TableCompatibility"})})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validatelibtabulardata",children:"ValidateLib.TabularData"})})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"#validatelibutilityclasses",children:"ValidateLib.UtilityClasses"})})}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"validatelibcontrol",children:"ValidateLib.Control"}),"\n",(0,i.jsxs)(a.p,{children:["Contains the most important interface ",(0,i.jsx)(a.code,{children:"IController"})," which is entry-point into the validation and manages all other modules and their communication.\r\nThe interface is really documented in the detail so users can use it easily.\r\nCheck out the ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/dd/de8/interface_validate_lib_1_1_control_1_1_i_controller.html",children:"generated documentation"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["Also there is ",(0,i.jsx)(a.code,{children:"ControllerFactory"})," class which is used to produce the ",(0,i.jsx)(a.code,{children:"IController"})," instances. We did this so we can change the implementations of ",(0,i.jsx)(a.code,{children:"IController"})," without the users of the library even noticing."]}),"\n",(0,i.jsx)(a.h3,{id:"validatelibencoding",children:"ValidateLib.Encoding"}),"\n",(0,i.jsxs)(a.p,{children:["This contains the classes that provide some functionality related to the encoding detection.\r\n",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/dc/d74/namespace_validate_lib_1_1_encoding.html",children:"Generated documentation"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"validateliberrorsandwarnings",children:"ValidateLib.ErrorsAndWarnings"}),"\n",(0,i.jsx)(a.p,{children:"This contains all the errors and warnings that can be produced during the validation."}),"\n",(0,i.jsxs)(a.p,{children:["Class that is the parent class for both ",(0,i.jsx)(a.code,{children:"Error"})," and ",(0,i.jsx)(a.code,{children:"Warnings"})," is ",(0,i.jsx)(a.code,{children:"ErrorOrWarning"})," and important method is:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-csharp",children:"public virtual string GetMessage(CultureInfo cultureInfo)\n"})}),"\n",(0,i.jsx)(a.p,{children:"Which retrieves localized message for the user to see based on the culture info provided."}),"\n",(0,i.jsxs)(a.p,{children:["Also we have factory classes ",(0,i.jsx)(a.code,{children:"WarningFactory"})," and ",(0,i.jsx)(a.code,{children:"ErrorFactory"})," for creating instances of these warnings and errors."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"We are not really satisfied with the design of this namespace and there might be some changes done to it in the future."})}),"\n",(0,i.jsxs)(a.p,{children:["See the ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/db/dac/namespace_validate_lib_1_1_errors_and_warnings.html",children:"generated documentation"})]}),"\n",(0,i.jsx)(a.h3,{id:"validatelibirinormalization",children:"ValidateLib.IRINormalization"}),"\n",(0,i.jsxs)(a.p,{children:["This namespace has generally just one job and that is ",(0,i.jsx)(a.a,{href:"https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/#url-normalization",children:"iri normalization"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["See the ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/d9/dd8/namespace_validate_lib_1_1_i_r_i_normalization.html",children:"generated documentation"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"validatelibmetadata",children:"ValidateLib.Metadata"}),"\n",(0,i.jsx)(a.p,{children:"This namespaces contains a lot of embedded namespaces and forms an essential part of the validator. Its main goals are providing classes for the metadata parsing and validation stage where we extract the metadata from metadata file and create internal model of this."}),"\n",(0,i.jsx)(a.p,{children:"It contains embedded namespaces:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Descriptors"})," - contains classes representing individual descriptors described in the specification for example ",(0,i.jsx)(a.a,{href:"https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#tables",children:"table descriptor"})," or ",(0,i.jsx)(a.a,{href:"https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#table-groups",children:"table group descriptor"}),". These classes contain a lot of methods used for the ",(0,i.jsx)(a.a,{href:"https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#normalization",children:"normalization"})," or for parsing individual properties."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"DialectExtraction"})," - contains classes that extracts dialect from table descriptor-"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Embedded"})," - contains classes that extracts embedded metadata from the tabular data file."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"ErrorHandling"})," - contains classes that enables more detailed warnings and errors messages"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"MetadataLocation"})," - contains classes that ",(0,i.jsx)(a.a,{href:"https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/#locating-metadata",children:"locate"})," the metadata."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Parsers"})," - contains a parser class for each of the descriptor that parses the class. Most of the parses just inherit from the ",(0,i.jsx)(a.code,{children:"DescriptorParserBase"})," which provides the needed functionality as it is generic and it calls the right methods like ",(0,i.jsx)(a.code,{children:"GetPropertyParser(JProperty property, List<Warning> warnings)"})," from the interface ",(0,i.jsx)(a.code,{children:"IParsable<T>"})," which all of the descriptors must implement."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"ParsingAndValidation"})," - contains class ",(0,i.jsx)(a.code,{children:"MetadataParseValidator"})," which orchestrates all of the submodules in this module and provides some unified interface for parsing and validating the metadata file."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"PropertyParsers"})," - contains individual property parsers. When we want to parse some property represented as a ",(0,i.jsx)(a.code,{children:"JProperty"})," the individual ",(0,i.jsx)(a.code,{children:"Parser"})," (from Parsers namespaces) just calls a ",(0,i.jsx)(a.code,{children:"GetPropertyParser"})," on particular descriptor and it produces a parser which is then able to parse this property."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Unification"})," - contains classes that helps unify the state in which we have our metadata model before starting tabular data parsing and validation. It creates file wrappers for every table file so we download it just once and then use it from the disk. Also we want to start every validation as Table group validation so we unify it before the process begins."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Validators"})," - Contains validators of individual descriptors. Some of the descriptors can have some advanced rules of what combination of properties they are allowed to contain like for example ",(0,i.jsx)(a.code,{children:"ForeignKeyDescriptor"})," cannot contain arbitrary foreign keys. They must exist in some table schema in the table group or table descriptor."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["See the ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/d9/dfb/namespace_validate_lib_1_1_metadata.html",children:"generated documentation"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"validatelibresultwriters",children:"ValidateLib.ResultWriters"}),"\n",(0,i.jsxs)(a.p,{children:["This contains classes for creating result files in different formats. Contains enumeration of currently supported result file formats ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/df/d30/namespace_validate_lib_1_1_result_creators.html#a8b9472c929716cd2be72ad7157264e0b",children:"ResultFileFormat"}),". Also contains ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/d5/d2d/class_validate_lib_1_1_result_creators_1_1_result_writer_factory.html",children:"ResultWriterFactory"})," which creates instances of the result writers based on the enumeration mentioned before."]}),"\n",(0,i.jsxs)(a.p,{children:["See the ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/d3/dce/namespace_validate_lib_1_1_result_writers.html",children:"generated documentation"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"validatelibresults",children:"ValidateLib.Results"}),"\n",(0,i.jsxs)(a.p,{children:["Contains files and interfaces that represent the result of validation. Most important are ",(0,i.jsx)(a.code,{children:"ITableGroupValidationDetail"}),",",(0,i.jsx)(a.code,{children:"ITableValidationDetail"}),", ",(0,i.jsx)(a.code,{children:"IResult"})," which user can directly access and use them as they are return values for the ",(0,i.jsx)(a.code,{children:"Controller"})]}),"\n",(0,i.jsxs)(a.p,{children:["See the ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/dd/d1b/namespace_validate_lib_1_1_results.html",children:"generated documentation"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"validatelibtablecompatibility",children:"ValidateLib.TableCompatibility"}),"\n",(0,i.jsxs)(a.p,{children:["Contains classes that verifies that two ",(0,i.jsx)(a.a,{href:"https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#tables",children:"table descriptors"})," are compatible as defined in ",(0,i.jsx)(a.a,{href:"https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#table-description-compatibility",children:"specification"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["See the ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/d1/d4a/namespace_validate_lib_1_1_table_compatibility.html",children:"generated documentation"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"validatelibtabulardata",children:"ValidateLib.TabularData"}),"\n",(0,i.jsxs)(a.p,{children:["Second biggest namespace after the ",(0,i.jsx)(a.code,{children:"Metadata"}),".\r\nIt contains following sub-namespaces:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"AnnotatedTabularDataModel"})," - contains classes that represent the ",(0,i.jsx)(a.a,{href:"https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/",children:"annotated tabular data model"})," like for example annotated table, table group, row, cell, column etc. We map the entities from ",(0,i.jsx)(a.code,{children:"Metadata"})," namespace to these basically."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Datatypes"})," - contains a lot of classes that represent individual datatypes that are allowed to be defined in the ",(0,i.jsx)(a.a,{href:"https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/",children:"metadata vocabulary"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Parsing"})," - contains classes that are used to parse the tabular data files based on the dialect descriptor that was found during the metadata localization or was defined in the metadata document. Class ",(0,i.jsx)(a.code,{children:"Flags"})," contains information extracted from dialect descriptor used for parsing the tabular data file. Also we created a ",(0,i.jsx)(a.code,{children:"CustomStreamReader"})," that buffs the characters from the ",(0,i.jsx)(a.code,{children:"StreamReader"})," class so we can go forward and backward in the stream. These classes create huge bottleneck of the parsing and it is a space for possible improvements on the efficiency of the whole validator."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Validation"})," - validation is done basically by the two main validation rules ",(0,i.jsx)(a.code,{children:"ICellValidationRule"})," - to which we pass ",(0,i.jsx)(a.code,{children:"AnnotatedCell"})," and it validates different aspects of it for example if the datatype matches desired datatype of the column the cell is in. ",(0,i.jsx)(a.code,{children:"IRowValidationRule"})," - to which we pass ",(0,i.jsx)(a.code,{children:"AnnotatedRow"})," and it validates different aspects of it for example that each row contains same amount of fields. Then there are some exceptions like ",(0,i.jsx)(a.code,{children:"FKValidationRule"})," because the validation of foreign keys is more demanding and complex. This is ready for future extensions as we just need to create more validation rules in the future (we will probably add reflection to create such classes on demand of the user). ",(0,i.jsx)(a.code,{children:"TabularDataTableValidator"})," orchestrates parsing and validation of one tabular data file. ",(0,i.jsx)(a.code,{children:"TabularDataTableGroupValidator"})," orchestrates parsing and validation of all the tabular data files inside the table group."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["See the ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/dc/d9c/namespace_validate_lib_1_1_tabular_data.html",children:"generated documentation"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"validatelibutilityclasses",children:"ValidateLib.UtilityClasses"}),"\n",(0,i.jsx)(a.p,{children:"Contains utility classes that helps other modules fullfil their tasks."}),"\n",(0,i.jsxs)(a.p,{children:["See the ",(0,i.jsx)(a.a,{href:"https://drexem.github.io/validateIT/docs/lib/developer/generated/html/dc/df0/namespace_validate_lib_1_1_utility_classes.html",children:"generated documentation"}),"."]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},15:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/architecture-a5325baab8342785a9a084475ac6cc13.jpg"},1162:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/validateLibNS-42b78842a3a89d46536341ea20e6fc0f.png"},8453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>l});var i=t(6540);const n={},r=i.createContext(n);function s(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);