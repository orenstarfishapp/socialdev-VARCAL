import React from "react"; // Importing the React library to enable JSX and functional component creation.
import FooterColumn from "./FooterColumn"; // Importing a custom component, FooterColumn, for displaying each footer column.
import Logo from "./Logo"; // Importing a Logo component, likely used to display the logo in the footer section.

interface FooterSectionProps { // Defining a TypeScript interface to specify the props structure for FooterSection.
  columns: { // Declaring that the columns prop is an array of objects.
    title: string; // Each object has a 'title' string representing the column's title.
    items: { title: string; url: string }[]; // Each column contains an array of items with a title and URL.
  }[]; // The columns prop is an array of these column objects.
}

// FooterSection prop Goal is to pass the title and the url to footersection that is below. 

const FooterSection: React.FC<FooterSectionProps> = ({ columns }) => { // Declaring the FooterSection component with TypeScript type annotation for props.
  return (
    <div className="bg-[#35023D] text-white self-center flex-row"> 
      <div className="flex flex-col md:flex-row md:flex-wrap flex-1 justify-center flex-grow shrink my-0 mx-auto pt-[100px] pb-[50px] size-full max-w-[1140px] w-full max-md:px-5"> 
        
        <Logo /> 
        
        {columns.map((column, index) => ( // Mapping over columns prop to render each column in the footer.
          <FooterColumn key={index} title={column.title} items={column.items} /> 
          // Rendering a FooterColumn component for each column, passing title and items as props. Key prop is set to ensure each child is uniquely identifiable.
        ))}
        
      </div>
    </div>
  );
};

export default FooterSection; // Exporting FooterSection so it can be imported and used in other files.
