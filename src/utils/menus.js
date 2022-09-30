import React from "react";
import Topic from '@/components/navigation/navLinks/Topic';
import TopicsList from '@/components/navigation/navLinks/TopicsList';
import TopicsDashboard from '@/components/navigation/navLinks/TopicsDashboard';
import Subtopic from '@/components/navigation/navLinks/Subtopic';
import Article from '@/components/pages/Article';
import NotFound from '@/components/pages/NotFound';

export const menu = [
  {
    icon: "",
    title: "Education",
    to: "education",
    path: "topic-1", 
    element: <Topic />,
    children: [
      {
        title: "Technical Analysis",
        to: "technical analysis",
        path: "topic-1", 
        element: <Topic />,
        children: [
          {
            title: "The Dow Theory",
            to: "thedowtheory",
            path: "topic-1", 
            element: <Topic />,
          }
        ]
      }
    ]
  }
];
export const topics = [
    {
      icon: "",
      title: "Education",
      to: "education",
      path: "topic-1", 
      element: <Topic />,
      children: [
        {
          title: "Technical Analysis",
          to: "technical analysis",
          path: "topic-1", 
          element: <Topic />,
        }
      ]
    }
  ];
export const routes = [
  { path: "/", element: <TopicsDashboard />},
  { path: "topic-1", element: <Topic topic={"Topic-1"} /> ,
    children: [
      { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
      { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/>,
        children: [
          { path: "article-1", element: <Article><div>article 1</div></Article>},
          { path: "article-2", element: <Article> <div>article 2</div></Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
      { path: "subtopic-3", element: <Subtopic path={"subtopic-3"}/>,
        children: [
          { path: "article-1", element: <Article><div>article 1</div></Article>},
          { path: "article-2", element: <Article> <div>article 2</div></Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
    ], 
  },
  
  { path: "topic-2", element: <Topic topic={"Topic-2"}/>,
    children: [
      { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ],
      },
      { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ],
       },
      { path: "subtopic-3", element: <Subtopic path={"subtopic-3"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ],
      },
    ], 
  },
  {
    path: "topic-3",element: <Topic topic={"Topic-3"} />,
    children: [
      { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
      { path: "subtopic-2", element: <Subtopic path={"subtopic-2"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ], 
      },
      { path: "subtopic-3", element: <Subtopic path={"subtopic-3"}/>,
        children: [
          { path: "article-1", element: <Article> <div>article 1</div> </Article>},
          { path: "article-2", element: <Article> <div>article 2</div> </Article>},
          { path: "article-3", element: <Article> <div>article 3</div> </Article>}
        ],
      },
    ],
  }, 
  {
    path: "*",element: <NotFound /> 
  }, 
];


export function useRoutesNestedElement(){
  const copy_routes = [
    { path: "topic-1", element: <Topic topic={"Topic-1"} />,
      children: [
        { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/>,
          children: [
            { path: "article-1", element: <Article><div>article 1</div></Article>}
          ], 
        }
      ], 
    }
  ];
  const routes = [
    { path: "topic-1", element: <Topic topic={"Topic-1"} />,
      children: [
        { path: "subtopic-1", element: <Subtopic path={"subtopic-1"}/>,
          children: [
            { path: "article-1", element: <Article><div>article 1</div></Article>}
          ], 
        }
      ], 
    }
  ]
  
  const menu_routes = [];
  console.table( menu_routes)
  for(const k1 in routes) {
    if(typeof routes[k1] === 'object') {
      console.log(`Parent ${k1}:`,routes[k1].path, routes[k1].element); // Assign the [ path: " ", element: <Topic topic={""} /> ]
      for(const k2 in routes[k1]) {
        const first_children = routes[k1][k2];
        if( routes[k1][k2].constructor === Array && routes[k1][k2].length ){
          for(const k3 in routes[k1][k2]) {
            console.log(`first_children ${k3}:`,(routes[k1][k2])[k3].path, (routes[k1][k2])[k3].element); // Assign the [path: "", element: <Subtopic path={"subtopic-3"}/>]
            const second_children = (routes[k1][k2])[k3][k2]
            if((routes[k1][k2])[k3][k2].constructor === Array && (routes[k1][k2])[k3][k2].length){
              for(const k4 in (routes[k1][k2])[k3][k2])
              console.log(`second_children ${k4}:`,((routes[k1][k2])[k3][k2])[k4].path, ((routes[k1][k2])[k3][k2])[k4].element); // Assign the [path: "", element: <Article><div>article 3</div></Article>]
            }
            
          }
        }
        
      }
    } else {
      console.log(`not object ${key}:`,routes[key]);
    }
    menu_routes.push(routes)
  }
  console.table( menu_routes)
}
/* 
const topicElement = document.createElement("div");
topicElement.id = "topic";
topicElement.innerText = 'Topic'



const subtopicElement = document.createElement("section");
subtopicElement.id = "subtopic";
subtopicElement.innerText = 'Subtopic';

const articleElement = document.createElement("article");
articleElement.id = "article";
articleElement.innerText = 'Article';



const arr1 = [] ;
const routes = { path: "topic", element: topicElement,
                 children: [
                    { path: "subtopic", element: subtopicElement,
                      children: [
                        { path: "article", element: articleElement}
                      ], 
                    }
                  ], 
                };

arr1.push(routes)

console.log("routes:",routes)
console.log("arr1:",arr1) 
*/

/*

let arr1 = [] ;

 let topic = { path: 'topic', 
               element: 'div' 
             };
 let children1 = [
                  { path: "article", 
                    element: 'articleElement'
                  }
                ];

for(let i=1; i<=3; i++){
    let topic = {};
    topic.path = `topic-${i}`;
    topic.element = 'DIV';

    let children_subtopic = [];
    for(let j=1; j<=4; j++){
      let subtopic = {};
        subtopic.path = `subtopic-${j}`;
        subtopic.element = 'SECTION';
        children_subtopic.push(subtopic)
        
        let children_article = [];
        for(k=1; k<=5; k++){
            let article = {};
            article.path = `article-${k}`;
            article.element = 'ARTICLE';
            children_article.push(article)
        }
        subtopic.children = children_article;
    }
    topic.children = children_subtopic;
    arr1.push(topic)
}

// let cloneObj = Object.assign({}, topic);
// cloneObj.children = children1;
console.log(arr1);
 */