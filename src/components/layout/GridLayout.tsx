

import GridCell from '../grid/GridCell';


const gridItems = [
  { imageSrc: "/img/company_image_example1.jpeg", logoSrc:"/img/company_logo_example1.png", title: "엔샵", description: ["D-3", ],urlSrc:"/club-detail" },
  { imageSrc: "https://via.placeholder.com/150",logoSrc:"/img/company_logo_example1.png", title: "한손", description: ["D-11"],urlSrc:"/club-detail" },
  { imageSrc: "https://via.placeholder.com/150",logoSrc:"/img/company_logo_example1.png", title: "Title 3", description: ["Description"],urlSrc:"/club-detail" },
  { imageSrc: "https://via.placeholder.com/150",logoSrc:"/img/company_logo_example1.png", title: "Title 4", description: ["Description"],urlSrc:"/club-detail" },
  { imageSrc: "https://via.placeholder.com/150",logoSrc:"/img/company_logo_example1.png", title: "Title 5", description: ["Description"],urlSrc:"/club-detail" },
  { imageSrc: "https://via.placeholder.com/150",logoSrc:"/img/company_logo_example1.png", title: "Title 6", description: ["Description"],urlSrc:"/club-detail" },
  { imageSrc: "https://via.placeholder.com/150",logoSrc:"/img/company_logo_example1.png", title: "Title 7", description: ["Description"],urlSrc:"/club-detail" },
  { imageSrc: "https://via.placeholder.com/150",logoSrc:"/img/company_logo_example1.png", title: "Title 8", description: ["Description"],urlSrc:"/club-detail" },
]; 

const GridLayout: React.FC = () => {
  return ( 
    <div className="p-9 w-full min-h-screen">  
      <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 gap-4 w-full"> 
        {gridItems.map((item, index) => (
          <GridCell
            key={index}
            imageSrc={item.imageSrc}
            logoSrc={item.logoSrc}
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