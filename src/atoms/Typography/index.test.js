import { render, screen } from '@testing-library/react';
import Typography from './index';


describe("Text Component", ()=>{
    test("Check for Para", ()=>{
        render(<Typography>Hello World</Typography>);
        const para = screen.getByText('Hello World');
        expect(para).toBeInTheDocument();
    })
    test ("Check for Heading", ()=>{
        render(<Typography type="h1">Hello World</Typography>);
        const header = screen.getByRole('heading');
        expect(header).toBeInTheDocument();
    })
})