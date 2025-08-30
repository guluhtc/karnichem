import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const BlogDetailPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();

  const blogPosts: Record<string, BlogPost> = {
    'sustainable-manufacturing': {
      id: 'sustainable-manufacturing',
      title: 'Sustainable Manufacturing Practices in PCC Production',
      excerpt: 'Exploring eco-friendly approaches to precipitated calcium carbonate manufacturing while maintaining quality standards.',
      content: `
        <p>At Shree Karni Chemicals, sustainability isn't just a buzzword—it's a core principle that drives our manufacturing processes. As one of Rajasthan's leading precipitated calcium carbonate (PCC) manufacturers, we've implemented comprehensive sustainable practices that benefit both the environment and our product quality.</p>

        <h3>Environmental Responsibility</h3>
        <p>Our commitment to environmental stewardship begins with our raw material sourcing. We work exclusively with certified limestone suppliers who follow responsible mining practices. This ensures that our supply chain maintains minimal environmental impact while supporting local communities.</p>

        <p>Water conservation is another critical aspect of our sustainability initiatives. Our closed-loop water system recycles and purifies water used in the PCC production process, reducing consumption by over 60% compared to traditional methods. This not only conserves this precious resource but also eliminates wastewater discharge.</p>

        <h3>Energy Efficiency</h3>
        <p>We've invested heavily in energy-efficient equipment and renewable energy sources. Our facility now operates on 40% renewable energy, with plans to reach 70% by 2026. Advanced heat recovery systems capture and reuse thermal energy from our production processes, significantly reducing our carbon footprint.</p>

        <h3>Quality Through Sustainability</h3>
        <p>Interestingly, our sustainable practices have led to improved product quality. The precise control required for environmental compliance has resulted in more consistent particle size distribution and higher purity levels in our PCC products. This demonstrates that environmental responsibility and product excellence go hand in hand.</p>

        <h3>Future Initiatives</h3>
        <p>Looking ahead, we're developing bio-based processing aids and exploring carbon capture technologies. Our R&D team is also working on new PCC grades specifically designed for sustainable applications, including biodegradable plastics and eco-friendly paints.</p>

        <p>Sustainability isn't just about compliance—it's about creating value for our customers, communities, and future generations. Every ton of PCC we produce reflects our commitment to responsible manufacturing.</p>
      `,
      author: 'Padam Jain',
      date: '2025-01-15',
      readTime: '6 min read',
      category: 'Sustainability',
      image: '/factory/DJI_0014 (2).jpg',
      tags: ['Sustainability', 'Manufacturing', 'Environment', 'Quality']
    },
    'pcc-applications-guide': {
      id: 'pcc-applications-guide',
      title: 'Complete Guide to PCC Applications Across Industries',
      excerpt: 'Understanding how different grades of precipitated calcium carbonate serve various industrial applications.',
      content: `
        <p>Precipitated calcium carbonate (PCC) is one of the most versatile industrial minerals, finding applications across numerous industries. At Shree Karni Chemicals, we produce specialized PCC grades tailored to meet the unique requirements of different sectors.</p>

        <h3>Paper and Printing Industry</h3>
        <p>In the paper industry, PCC serves as both a filler and coating pigment. Our paper-grade PCC enhances opacity, brightness, and printability while reducing production costs. The controlled particle size distribution ensures excellent ink absorption and print quality, making it ideal for high-end printing papers.</p>

        <h3>Paint and Coatings</h3>
        <p>PCC acts as an extender pigment in paint formulations, providing opacity and improving durability. Our paint-grade PCC helps reduce titanium dioxide requirements while maintaining excellent hiding power. The result is cost-effective paints with superior performance characteristics.</p>

        <h3>Pharmaceutical and Food Applications</h3>
        <p>Our USP-grade PCC meets the highest purity standards for pharmaceutical and food applications. It's widely used in antacid formulations, calcium supplements, and as a food additive (E170). Strict quality control ensures compliance with international pharmacopoeia standards.</p>

        <h3>Rubber Industry</h3>
        <p>In rubber applications, PCC provides reinforcement and improves mechanical properties. Our rubber-grade PCC enhances tensile strength, tear resistance, and processing characteristics while reducing compound costs. It's particularly valuable in tire manufacturing and industrial rubber products.</p>

        <h3>Personal Care Products</h3>
        <p>The oral care industry relies on our dentifrice-grade PCC for toothpaste formulations. The controlled abrasiveness and ultra-fine particle size provide effective cleaning while protecting tooth enamel. High purity ensures safety for daily use.</p>

        <h3>Emerging Applications</h3>
        <p>We're continuously developing new PCC grades for emerging applications, including biodegradable plastics, advanced ceramics, and specialty chemicals. Our R&D team works closely with customers to develop customized solutions for unique requirements.</p>

        <p>Understanding the right PCC grade for your application is crucial for optimal performance. Our technical team provides expert guidance to help you select the perfect grade for your specific needs.</p>
      `,
      author: 'Technical Team',
      date: '2025-01-12',
      readTime: '8 min read',
      category: 'Technical',
      image: '/products/pcc sk-11 (2).jpg',
      tags: ['Applications', 'Industries', 'Technical', 'Guide']
    },
    'quality-control-standards': {
      id: 'quality-control-standards',
      title: 'Quality Control Standards in PCC Manufacturing',
      excerpt: 'How rigorous quality control measures ensure consistent, high-grade precipitated calcium carbonate production.',
      content: `
        <p>Quality control is the cornerstone of PCC manufacturing at Shree Karni Chemicals. Our comprehensive quality management system ensures that every batch of precipitated calcium carbonate meets or exceeds customer specifications and international standards.</p>

        <h3>Raw Material Testing</h3>
        <p>Quality begins with raw materials. Every limestone shipment undergoes rigorous testing for chemical composition, purity, and physical properties. Our laboratory analyzes calcium carbonate content, impurity levels, and particle size distribution before materials enter our production process.</p>

        <h3>In-Process Monitoring</h3>
        <p>Throughout production, we employ continuous monitoring systems that track critical parameters including temperature, pH, reaction time, and agitation speed. Automated sampling systems collect samples at predetermined intervals, ensuring process consistency and early detection of any deviations.</p>

        <h3>Advanced Testing Methods</h3>
        <p>Our state-of-the-art laboratory utilizes advanced analytical techniques including X-ray fluorescence (XRF), particle size analysis, and scanning electron microscopy (SEM). These methods provide detailed insights into product characteristics, enabling precise quality control.</p>

        <h3>International Certifications</h3>
        <p>We maintain certifications including ISO 9001:2015, GMP, and HACCP. Our quality management system undergoes regular third-party audits to ensure compliance with international standards. For pharmaceutical and food grades, we follow USP, EP, and JP pharmacopoeia requirements.</p>

        <h3>Customer-Specific Testing</h3>
        <p>Understanding that different applications require specific properties, we offer customized testing protocols. Whether you need specific particle size distribution, surface area, or chemical purity, our laboratory can develop tailored testing procedures to meet your requirements.</p>

        <h3>Continuous Improvement</h3>
        <p>Our quality team regularly reviews processes and implements improvements based on customer feedback and industry developments. This commitment to continuous improvement ensures that our PCC products consistently meet evolving market demands.</p>

        <p>Quality isn't just about meeting specifications—it's about building trust with our customers through consistent, reliable products that enhance their manufacturing processes.</p>
      `,
      author: 'Quality Team',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Quality',
      image: '/factory/SDS_7865.JPG',
      tags: ['Quality Control', 'Standards', 'Testing', 'Certification']
    },
    'industry-trends-2025': {
      id: 'industry-trends-2025',
      title: 'PCC Industry Trends and Future Outlook for 2025',
      excerpt: 'Analyzing market trends, technological advances, and growth opportunities in the precipitated calcium carbonate industry.',
      content: `
        <p>The precipitated calcium carbonate (PCC) industry is experiencing unprecedented growth and transformation in 2025. As global demand for high-quality mineral fillers continues to rise, manufacturers like Shree Karni Chemicals are positioning themselves at the forefront of industry innovation.</p>

        <h3>Market Growth Drivers</h3>
        <p>Several key factors are driving robust growth in the PCC market. The expanding paper and packaging industry, particularly in emerging economies, continues to be a major consumer of PCC products. Additionally, the growing automotive sector's demand for lightweight, high-performance materials has created new opportunities for specialized PCC grades.</p>

        <p>The pharmaceutical and food industries are also contributing significantly to market expansion. As regulatory standards become more stringent, there's increased demand for ultra-pure, pharmaceutical-grade PCC that meets international pharmacopoeia requirements.</p>

        <h3>Technological Advancements</h3>
        <p>Advanced manufacturing technologies are revolutionizing PCC production. Automated process controls, real-time quality monitoring, and AI-driven optimization are enabling manufacturers to achieve unprecedented consistency and quality levels while reducing production costs.</p>

        <p>Nanotechnology applications are opening new frontiers for PCC. Ultra-fine and nano-grade PCC products are finding applications in advanced materials, electronics, and specialty chemicals, commanding premium prices and higher margins.</p>

        <h3>Sustainability Focus</h3>
        <p>Environmental sustainability has become a critical competitive factor. Companies investing in green technologies, renewable energy, and circular economy principles are gaining significant market advantages. Carbon footprint reduction and waste minimization are no longer optional—they're essential for long-term success.</p>

        <h3>Regional Market Dynamics</h3>
        <p>Asia-Pacific continues to dominate global PCC consumption, with India and China leading demand growth. However, we're seeing increased localization trends as companies seek to reduce supply chain risks and transportation costs. This presents opportunities for regional manufacturers to capture market share.</p>

        <h3>Future Outlook</h3>
        <p>Looking ahead, the PCC industry is poised for continued growth, with analysts projecting a compound annual growth rate of 6-8% through 2030. Success will depend on innovation, quality, sustainability, and the ability to develop customized solutions for evolving market needs.</p>
      `,
      author: 'Market Research Team',
      date: '2025-01-08',
      readTime: '5 min read',
      category: 'Market Trends',
      image: '/factory/image from sky-1.jpg',
      tags: ['Trends', 'Market', 'Future', 'Growth']
    },
    'pharmaceutical-grade-importance': {
      id: 'pharmaceutical-grade-importance',
      title: 'The Critical Importance of Pharmaceutical Grade PCC',
      excerpt: 'Why pharmaceutical applications demand the highest purity standards and how we achieve them.',
      content: `
        <p>Pharmaceutical-grade precipitated calcium carbonate represents the pinnacle of purity and quality in mineral manufacturing. At Shree Karni Chemicals, our pharmaceutical-grade PCC meets the most stringent international standards, making it suitable for critical healthcare applications.</p>

        <h3>Regulatory Compliance</h3>
        <p>Pharmaceutical-grade PCC must comply with multiple pharmacopoeia standards including USP (United States Pharmacopeia), EP (European Pharmacopoeia), and JP (Japanese Pharmacopoeia). Each standard specifies strict limits for heavy metals, arsenic, lead, and other impurities that could pose health risks.</p>

        <p>Our manufacturing facility maintains GMP (Good Manufacturing Practice) certification, ensuring that every aspect of production—from raw material sourcing to final packaging—meets pharmaceutical industry standards. Regular audits by regulatory bodies validate our compliance and quality systems.</p>

        <h3>Purity Requirements</h3>
        <p>The purity requirements for pharmaceutical-grade PCC are exceptionally demanding. Heavy metals must be below 10 ppm, arsenic below 3 ppm, and lead below 2 ppm. These specifications require sophisticated analytical techniques and rigorous quality control throughout the manufacturing process.</p>

        <h3>Manufacturing Process</h3>
        <p>Our pharmaceutical-grade PCC production employs a controlled precipitation process using high-purity raw materials. Multiple purification steps remove impurities, while advanced filtration and washing systems ensure the final product meets all specifications. Each batch undergoes comprehensive testing before release.</p>

        <h3>Applications in Healthcare</h3>
        <p>Pharmaceutical-grade PCC serves multiple critical functions in healthcare products. As an excipient in tablet formulations, it provides bulk and aids in tablet compression. In antacid products, it neutralizes stomach acid while providing supplemental calcium. Food supplement applications rely on its high bioavailability and safety profile.</p>

        <h3>Quality Assurance</h3>
        <p>Our quality assurance program for pharmaceutical-grade PCC includes incoming raw material testing, in-process monitoring, finished product analysis, and stability testing. Complete batch records provide full traceability, essential for pharmaceutical applications.</p>

        <p>The pharmaceutical industry's trust in our products reflects our unwavering commitment to quality, purity, and regulatory compliance. Every gram of pharmaceutical-grade PCC we produce undergoes the same rigorous quality standards that protect patient health.</p>
      `,
      author: 'Regulatory Team',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Pharmaceutical',
      image: '/products/food precipitate calcium carbonate powder.jpg',
      tags: ['Pharmaceutical', 'Quality', 'Regulations', 'Purity']
    },
    'innovation-in-pcc-production': {
      id: 'innovation-in-pcc-production',
      title: 'Innovation and Technology in Modern PCC Production',
      excerpt: 'How cutting-edge technology and innovative processes are revolutionizing calcium carbonate manufacturing.',
      content: `
        <p>The precipitated calcium carbonate industry is undergoing a technological revolution. At Shree Karni Chemicals, we're at the forefront of adopting innovative technologies that enhance product quality, improve efficiency, and reduce environmental impact.</p>

        <h3>Advanced Process Control</h3>
        <p>Modern PCC production relies heavily on sophisticated process control systems. Our facility employs real-time monitoring of critical parameters including temperature, pH, reaction kinetics, and particle size distribution. Advanced algorithms automatically adjust process conditions to maintain optimal product quality.</p>

        <p>Predictive analytics help us anticipate potential issues before they occur, minimizing downtime and ensuring consistent production. Machine learning models analyze historical data to optimize process parameters and improve yield.</p>

        <h3>Automation and Robotics</h3>
        <p>Automated systems handle material handling, packaging, and quality testing, reducing human error and improving safety. Robotic systems ensure precise dosing of raw materials and consistent mixing conditions, critical factors in achieving uniform product quality.</p>

        <h3>Analytical Technologies</h3>
        <p>State-of-the-art analytical equipment enables rapid, accurate quality assessment. X-ray fluorescence (XRF) spectroscopy provides real-time chemical composition analysis, while laser diffraction particle size analyzers ensure consistent particle size distribution.</p>

        <p>Scanning electron microscopy (SEM) and transmission electron microscopy (TEM) provide detailed insights into particle morphology and surface characteristics, enabling us to optimize products for specific applications.</p>

        <h3>Green Technology Integration</h3>
        <p>Innovation isn't just about performance—it's also about sustainability. Our latest process improvements include energy recovery systems that capture and reuse thermal energy, reducing overall energy consumption by 30%. Advanced filtration systems enable water recycling, minimizing environmental impact.</p>

        <h3>Digital Transformation</h3>
        <p>Digital technologies are transforming how we operate. IoT sensors throughout our facility provide continuous monitoring and data collection. Cloud-based systems enable remote monitoring and predictive maintenance, improving operational efficiency.</p>

        <h3>Future Innovations</h3>
        <p>We're continuously investing in R&D to develop next-generation PCC products. Current projects include surface-modified PCC for enhanced performance, bio-based processing aids, and novel precipitation techniques for specialized applications.</p>

        <p>Innovation drives our industry forward, enabling us to meet evolving customer needs while maintaining our commitment to quality and sustainability. The future of PCC manufacturing is bright, powered by technology and innovation.</p>
      `,
      author: 'R&D Team',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Innovation',
      image: '/factory/DJI_0003 (2).jpg',
      tags: ['Innovation', 'Technology', 'R&D', 'Production']
    }
  };

  const post = blogId ? blogPosts[blogId] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            View All Blog Posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-red-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">{post.title}</span>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8 md:p-12">
            {/* Category Badge */}
            <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900">Share this article</h4>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-lg flex items-center justify-center transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
            <Link to="/blog" className="text-red-600 hover:text-red-700 font-medium">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: 'center center' }}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-red-600 font-medium mb-2">{relatedPost.category}</div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2 leading-tight">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="flex items-center space-x-4 mt-4 text-xs text-gray-500">
                        <span>{relatedPost.author}</span>
                        <span>•</span>
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Back to Blog */}
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;