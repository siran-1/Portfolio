import { useInView } from 'react-intersection-observer';

export const useSlideUp = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, // Adjust as needed
        triggerOnce: true, // Optional: Trigger animation only once
    });

    const className = inView ? 'slide_up is-visible' : 'slide_up';

    return { ref, className };
};
