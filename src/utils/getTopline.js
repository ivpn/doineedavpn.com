import { toplines } from '@/content/toplines.json';

export function getTopline(keywords) {
    let topline;
    const keys = Array.from(new Set(keywords));

    if (keys.includes(toplines.if.contains)) {
        const other = keys.filter(k => k !== toplines.if.contains);
        
        if (!other.length) topline = toplines.if.result;

        other.forEach(k => {
            if (toplines.if.and.contains.includes(k)) {
                topline = toplines.if.and.result;
            }
        });

        return topline;
    }
    
    if (keys.includes(toplines.elseif.contains)) {
        const other = keys.filter(k => k !== toplines.elseif.contains);

        if (!other.length) topline = toplines.elseif.result;

        other.forEach(k => {
            if (toplines.elseif.and.contains.includes(k)) {
                topline = toplines.elseif.and.result;
            }
        });

        return topline;
    }    

    return toplines.else.result;
}
