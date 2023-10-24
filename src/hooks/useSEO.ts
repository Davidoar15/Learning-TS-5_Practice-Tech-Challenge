import { useEffect } from "react";

interface SEOProps {
    title: string,
    description: string,
};

export function useSEO({ title, description }: SEOProps) {

    useEffect(() => {
        document.title = title;
        document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }, [title, description]);

    
};