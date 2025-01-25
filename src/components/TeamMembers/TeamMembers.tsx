import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import Title from '../Title';

export default function TeamMembers() {
  const members = [
    {
      name: 'Jenny Wilson',
      role: 'Ceo & Founder',
      image: '/images/members/member1.png',
    },
    {
      name: 'Jane Cooper',
      role: 'Worker',
      image: '/images/members/member2.png',
    },
    {
      name: 'Cody Fisher',
      role: 'Security Guard',
      image: '/images/members/member3.png',
    },
    {
      name: 'Robert Fox',
      role: 'Senior Farmer Manager',
      image: '/images/members/member4.png',
    },
  ];

  const socialIcons = [
    { icon: FaFacebookF, link: 'https://facebook.com' },
    { icon: FaTwitter, link: 'https://twitter.com' },
    { icon: FaLinkedinIn, link: 'https://linkedin.com' },
    { icon: FaInstagram, link: 'https://instagram.com' },
  ];

  return (
    <div className='py-10 px-4'>
      <Title
        title='Team'
        description='Our Professional Members'
      />
      {/* Team Members Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
        {members.map((member, index) => (
          <div
            key={index}
            className='relative bg-white border rounded-2xl shadow-lg overflow-hidden group'
          >
            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className='w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-50'
            />
            {/* Social Icons (Hidden initially, shown on hover) */}
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='flex space-x-4 text-white'>
                {socialIcons.map(({ icon: Icon, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 rounded-full bg-gray-700 hover:bg-customGreen transition-all'
                  >
                    <Icon className='text-lg' />
                  </a>
                ))}
              </div>
            </div>
            {/* Member Info */}
            <div className='p-4 text-center'>
              <h3 className='text-lg font-semibold text-gray-900'>
                {member.name}
              </h3>
              <p className='text-sm text-gray-500'>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
