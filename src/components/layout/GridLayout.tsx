

import GridCell from '../grid/GridCell';


const gridItems = [
  { imageSrc: "https://via.placeholder.com/150", title: "엔샵", description: ["#프로그래밍", "#공모전"],urlSrc:"/client-application" },
  { imageSrc: "https://via.placeholder.com/150", title: "한손", description: ["#만화"],urlSrc:"/client-application" },
  { imageSrc: "https://via.placeholder.com/150", title: "Title 3", description: ["Description"],urlSrc:"/client-application" },
  { imageSrc: "https://via.placeholder.com/150", title: "Title 4", description: ["Description"],urlSrc:"/client-application" },
  { imageSrc: "https://via.placeholder.com/150", title: "Title 5", description: ["Description"],urlSrc:"/client-application" },
  { imageSrc: "https://via.placeholder.com/150", title: "Title 6", description: ["Description"],urlSrc:"/client-application" },
  { imageSrc: "https://via.placeholder.com/150", title: "Title 7", description: ["Description"],urlSrc:"/client-application" },
  { imageSrc: "https://via.placeholder.com/150", title: "Title 8", description: ["Description"],urlSrc:"/client-application" },
]; 

const GridLayout: React.FC = () => {
  return ( 
    <div className="p-9 w-full min-h-screen">  
      <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 gap-4 w-full"> 
        {gridItems.map((item, index) => (
          <GridCell
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            urlSrc={item.urlSrc}
          />
        ))}
      </div> 
    </div>
  );
};

export default GridLayout;