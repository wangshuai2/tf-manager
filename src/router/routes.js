import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import Test from '../components/Test'

import School from '../components/school/School'

export default [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/school',
        name: 'School',
        component: School,
        children: [
            {
                path: '/add',
                name: 'Add a School',
                
            }
        ]
    },
    {
        path: '/hello',
        name: 'Hello',
        component: HelloWorld
    },
    {
        path: '/test',
        name: 'Test',
        meta: {
            requireAuth: true
        },
        component: Test
    }
]