"use strict";
exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 4764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/linkedin.png
/* harmony default export */ const linkedin = ({"src":"/_next/static/media/linkedin.2d998541.png","height":32,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcklEQVR42h3LsQmDYBCGYecJpMj7CSnSp8kOadMkdeZIExALQRxBKwf4FSwcwUX0vJOXax6+yxgwTJvfijFmMk0qg3SQAzUPLAoK6Pjw5sqZ2RfuhW7k/LjzVbzor/xyIumpF7FgpqFiUas+IGE6wlPaAcOIPd8LFXs1AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/github.png
/* harmony default export */ const github = ({"src":"/_next/static/media/github.9d3c7c18.png","height":32,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAeElEQVR42iXJsQqCABSF4QNJCEFDQ1APUFOQ/13qYVp6m4Ycg3qJwFFw1RcQRPA5dLxekA8OB34hdnzpwi+exJGaETePbTiIyvpsxZnTNWGwUjgvxOKNCydHlgRFclHT8iS1NQ+cRnbjT24b9rhNXIS48yFlS0GGZkeTKJZH5W+OAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/footer.js






function FooterAll() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: " py-6 px-4 lg:px-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col lg:flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:sc2438@cornell.edu",
                            children: "Leave me a Message  \uD83D\uDC8C "
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.linkedin.com/in/mchen892/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: linkedin,
                                    alt: "LinkedIn",
                                    className: "w-6 h-6"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://github.com/mchen892",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: github,
                                    alt: "GitHub",
                                    className: "w-6 h-6"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center mt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#top",
                    className: "text-sm text-gray-600 hover:text-gray-800",
                    children: "Back to Top"
                })
            })
        ]
    });
}
/* harmony default export */ const footer = (FooterAll);


/***/ }),

/***/ 9805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const MobileNav = ()=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Define breakpoints for responsiveness
    const isLargeScreen = (0,react_responsive__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)({
        query: "(min-width: 1024px)"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mx-6 mt-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            className: "text-5xl",
                            children: "Maggie"
                        })
                    }),
                    !isLargeScreen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:hidden mr-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "text-5xl focus:outline-none mt-6",
                            onClick: ()=>setOpen(!open),
                            children: "☰"
                        })
                    })
                ]
            }),
            (isLargeScreen || open) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: `flex lg:flex-row mt-4 lg:mt-0 ${open ? "flex-col text-center mx-auto" : ""} lg:ml-8`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "lg:pr-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            className: "text-xl hover:underline",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "lg:pr-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/project",
                            className: "text-xl hover:underline",
                            children: "Project"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "lg:pr-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "https://drive.google.com/file/d/1t02eB1pcBu-1EN05543Psm-21befE34c/view?usp=sharing",
                            className: "text-xl hover:underline",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Resume"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "lg:pr-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/shop",
                            className: "text-xl hover:underline",
                            children: "Shop"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "lg:pr-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/blog",
                            className: "text-xl hover:underline",
                            children: "Journal"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNav);


/***/ })

};
;