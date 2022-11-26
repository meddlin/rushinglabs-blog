import { render } from '@testing-library/react';
import CategoryPost from '../../components/category-post';

it('renders homepage unchanged', () => {
    const testObj = {
        id: "this-is-a-test", 
        year: "2022",
        date: "2022-11-25", 
        title: "This is a Test", 
        preview: "", 
        previewImage: "", 
        previewImageWidth: "", 
        previewImageHeight: "", 
        previewImageCreditText: "",
        previewImageCreditUrl: "",
        section: "" 
    }
    const { container } = render(<CategoryPost {...testObj} />);

  expect(container).toMatchSnapshot()
})