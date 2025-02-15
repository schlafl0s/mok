export default async function handler(req, res) {
    if (req.query.secret !== process.env.REVALIDATE_SECRET) {
        return res.status(401).json({ message: 'Invalid token' });
    }
  
    try {
        const staticPages = [
            '/', '/about-us', '/services', '/contacts', 
            '/doctors', '/reviews', '/user-agreement', '/privacy-policy'
        ];
    
        for (const page of staticPages) {
            await res.revalidate(page);
        }

        const services = await fetch('https://wp.doctor-mok.ru/wp-json/wp/v2/services')
            .then((res) => res.json());
        
        for (const service of services) {
            await res.revalidate(`/services/${service.id}`);
        }
    
        const news = await fetch('https://wp.doctor-mok.ru/wp-json/wp/v2/news')
            .then((res) => res.json());
    
        for (const item of news) {
            await res.revalidate(`/news/${item.id}`);
        }
    
        return res.json({ revalidated: true });
        } catch (err) {
        return res.status(500).json({ message: 'Error revalidating', error: err.message });
        }
}