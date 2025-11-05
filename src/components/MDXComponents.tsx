import type { MDXComponents } from 'mdx/types';


const components: MDXComponents = {
// Example: render <a> consistently
a: (props) => <a {...props} rel="noopener noreferrer" target="_blank" />,
};


export default components;