import { h, hFragment } from '../h'

export function lipsum(pNum) {
    const loremText = 'Lrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    
    const paragraphs = []
    
    for (let i = 0; i < pNum; i++) {
        paragraphs.push(
            h('p', {}, [loremText])
        );
    
        
        return hFragment(paragraphs);
    }
}