export const siteData = [
  {
    type: "Container",
    props: {
      style: {
      }
    },
    elements: [
      {
        type: "Form",
        props: {
          id: 1,
          title: "Interactive Form",
          url: "/form",
          onSubmit: (e) => {
            e.preventDefault()
            for(let i = 0; i < e.target.elements.length; i++ ){
              const element = e.target.elements[i]
              element.name !== "Submit" && console.log(element.name, ": ", element.value)
            }
          }
        },
        elements: [
          {
            type: "Container",
            props: {
              style: {}
            },
            elements: [
              {
                type: "Text",
                value: "Order #1401356",
                props: {
                  style: {
                    padding: "10px",
                    margin: "10px 0",
                    textAlign: "center",
                    fontSize: "1.2rem"
                  }
                }
              },
              {
                type: "Container",
                props: {
                  style: {
                    padding: "40px",
                    color: "white",
                    backgroundColor: "#d25247",
                    textAlign: "center",
                    fontSize: "1.5rem"
                  }
                },
                elements: [
                  {
                    type: "Text",
                    value: "Did something go wrong?",
                    props: {
                      style: {
                        width: "100%",
                        paddingBottom: "4px",
                      }
                    }
                  },
                  {
                    type: "Text",
                    value: "Let us know how we can help.",
                    props: {
                      style: {
    
                      }
                    }
                  },
                ]
              },
            ]
          },
          {
            type: "Container",
            props: {
              style: {
                padding: "40px",
              }
            },
            elements: [
              {
                type: "Link",
                props: {
                  text: "",
                  href: "/",
                  style: {
                    color: "black",
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "8px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  },
                },
                hoverStyle: {
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                },
                elements: [
                  {
                    type: "Container",
                    props: {
                      style: {
                        padding: "20px",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        
                      }
                    },
                    elements: [
                      {
                        type: "Text",
                        value: "My Order was incomplete",
                        props: {
                          style: {
                            fontSize: "1.2rem"
                          }
                        }
                      },
                      {
                        type: "Image",
                        props: {
                            src: "img/chevron-right.svg",
                            alt: "Right Chevron",
                            style: {
                              width: "32px",
                              height: "32px",
                            }
                        }
                      }
                    ]
                  },
                ]
              },
              
              {
                type: "Link",
                props: {
                  text: "",
                  href: "/",
                  style: {
                    color: "black",
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "8px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  },
                },
                hoverStyle: {
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                },
                elements: [
                  {
                    type: "Container",
                    props: {
                      style: {
                        padding: "20px",
                        marginBottom: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }
                    },
                    elements: [
                      {
                        type: "Text",
                        value: "My Order was late",
                        props: {
                          style: {
                            fontSize: "1.2rem"
                          }
                        }
                      },
                      {
                        type: "Image",
                        props: {
                            src: "img/chevron-right.svg",
                            alt: "Right Chevron",
                            style: {
                              width: "32px",
                              height: "32px",
                            }
                        }
                      }
                    ]
                  },
                ]
              },
              

              {
                type: "Text",
                value: "Suggested amount to credit to the customer:",
                props: {
                  style: {
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "grey",
                    marginBottom: "20px",
                  }
                }
              },
              {
                id: "amount",
                type: "Input",
                name: "amount",
                props: {
                    type: "number",
                    placeholder: "",
                    name: "amount",
                    value: 0,
                    style: {
                      width: "100%",
                      padding: "10px",
                      marginBottom: "10px",
                      border: 0,
                      borderBottom: "1px solid",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      outline: "none"
                    }
                },
              },
              {
                type: "Text",
                value: "Amount to credit should be greater than 0",
                props: {
                  style: {
                    fontWeight: 500,
                    marginBottom: "40px",
                  }
                }
              },
              {
                type: "Container",
                props: {
                  style: {
                    width: "70%",
                    marginBottom: "40px",
                    display: "flex",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }
                },
                elements: [
                  {
                    type: "Text",
                    value: "Choose the reason:",
                    props: {
                      style: {
                        color: "grey",
                        flex: 1
                      }
                    }
                  },
                  {
                    type: "Select",
                    name: "reason",
                    id: "reason",
                    props: {
                        name: "reason",
                        options: [
                            { value: "Quality", label: "Quality" },
                            { value: "Quantity", label: "Quantity" },
                            { value: "Other", label: "Other" }
                        ],
                        style: {
                            padding: "10px",
                            margin: "10px 0",
                            border: 0,
                            borderBottom: "1px solid",
                            outline: "none",
                            fontSize: "1.1rem",
                            minWidth: "30%",
                            cursor: "pointer"
                        }
                    }
                },
                ]
              },
              {
                type: "Text",
                value: "Comments",
                props: {
                  style: {
                    color: "grey",
                    flex: 1,
                    marginBottom: "10px"
                  }
                }
              },
              {
                id: "comments",
                type: "TextArea",
                label: "Comments",
                name: "comments",
                props: {
                  placeholder: "",
                  name: "comments",
                  value: "",
                  rows: 5,
                  style: {
                    display: "block",
                    padding: "10px",
                    marginBottom: "40px",
                    border: "1px solid",
                    outline: "none",
                    fontSize: "1rem",
                    width: "100%",
                    borderRadius: "4px",
                  }
                }
              },
              {
                type: "Button",
                props: {
                  value: "Submit",
                  type: "submit",
                  name: "Submit",
                  // Dynamic behavior configuration:
                  //disabledUntilNotEmpty: "userNameInput", // Refers to the ID of the text field
                  style: {
                    color: "white",
                    backgroundColor: "#c5c5c5",
                    display: "block",
                    padding: "24px",
                    marginBottom: "40px",
                    border: "0",
                    outline: "none",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    width: "100%",
                    borderRadius: "50px",
                    cursor: "pointer"
                  }
                },
                hoverStyle: {
                  backgroundColor: "grey",
                },
                focusStyle: {
                  backgroundColor: "grey",
                }
              }
            ]
          },
        ]
      }
    ]
  },
  
]
