import { render, screen, getByText } from '@testing-library/react';
import Button from './index';

describe('Button Component',()=>{
    test("check for primary button",()=>{
        const {container} = render(<Button type='primary'>Hello World</Button>);
        const isPrimaryClass =container.firstChild.classList.contains('primary')
        expect(isPrimaryClass).toBe(true);
    })
    test("check for primary button with no type props",()=>{
        const {container} = render(<Button>Hello World</Button>);
        const isPrimaryClass =container.firstChild.classList.contains('primary')
        expect(isPrimaryClass).toBe(true);
    })
    test("check for secondary button",()=>{
        const {container} = render(<Button type='secondary'>Hello World</Button>);
        const isSecondaryClass =container.firstChild.classList.contains('secondary')
        expect(isSecondaryClass).toBe(true);
    })
    test("check for text button",()=>{
        const {container} = render(<Button type='text'>Hello World</Button>);
        const isTextClass =container.firstChild.classList.contains('text')
        expect(isTextClass).toBe(true);
    })

    test("check for text button",()=>{
        const {container} = render(<Button type='text' className='newClass'>Hello World</Button>);
        const isTextClass =container.firstChild.classList.contains('text')
        expect(isTextClass).toBe(true);
    })
})