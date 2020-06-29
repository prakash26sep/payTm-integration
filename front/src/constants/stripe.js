const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    // 1st is prod test key and second is for localhost
    ? 'pk_test_51GtnwoLHeuYMZTk52btT8K9duGLwOQTHSrfFVHi7S4ilO6s2fXEZ4IDLENv1uhKt9r38plCcyQcI5YVUcV20H76p00i5TJ2xUp'
    : 'pk_test_51GtnwoLHeuYMZTk52btT8K9duGLwOQTHSrfFVHi7S4ilO6s2fXEZ4IDLENv1uhKt9r38plCcyQcI5YVUcV20H76p00i5TJ2xUp';

export default STRIPE_PUBLISHABLE;