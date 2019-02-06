export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },

  {
    name: 'Administration',
    url: '/administration',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Administration',
        url: '/administration/testadministration',
        icon: 'icon-star'
      },
      {
        name: 'Company',
        url: '/administration/company',
        icon: 'icon-star'
      },
      {
        name: 'Register Company',
        url: '/administration/registerCompany',
        icon: 'icon-star'
      },
      {
        name: 'Add Meal',
        url: '/administration/addmeal',
        icon: 'icon-star'
      }


    ]
  },
  {
    name: 'Reporting',
    url: '/reporting',
    icon: 'icon-cursor',
    children: [
      {
        name: 'reports',
        url: '/reporting/testreporting',
        icon: 'icon-star'
      }

    ]
  },


];
