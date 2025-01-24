import { useInView } from 'react-intersection-observer';

export const useSlideUp = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true, 
    });

    const className = inView ? 'slide_up is-visible' : 'slide_up';

    return { ref, className };
};
