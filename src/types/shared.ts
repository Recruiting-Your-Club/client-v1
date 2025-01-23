
export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}
 
export interface TagProps {
    title: string;
    major: string[];
    onChange: (selected: string[]) => void;  
  }
  
export interface ImageProps {
    imageSrc: string;  
    altText?: string;  
}

export interface ImageSliderProps {
  images: ImageProps[];  
};

export interface ImageModalProps {
  image: ImageProps;
  onClose: () => void;
}

export interface ButtonProps {
    onClick: () => void;
    position: "left" | "right";  
  }

export interface TextProps {
    text: string;
}


export interface DetailHeaderProps {
    headerData: string[];  
    onHeaderClick?: (index: number) => void;  
  }

 