
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import Test from '../components/Test'

import School from '../components/school/School'
import SchoolAdd from '../components/school/School-add'
import SchoolEdit from '../components/school/School-edit'

import Teacher from '../components/teacher/Teacher'
import TeacherAdd from '../components/teacher/Teacher-add'
import TeacherEdit from '../components/teacher/Teacher-edit'

import Student from '../components/student/Student'
import StudentAdd from '../components/student/Student-add'
import StudentEdit from '../components/student/Student-edit'

import Grade from '../components/grade/Grade'
import GradeAdd from '../components/grade/Grade-add'
import GradeEdit from '../components/grade/Grade-edit'

import Class from '../components/class/Class'
import ClassAdd from '../components/class/Class-add'
import ClassEdit from '../components/class/Class-edit'

export default [
    {
        path: '/',
        name: 'Login',
        component: Login
    },

    /**
     * 学校部分操作路由
     */
    {
        path: '/school',
        name: 'School',
        component: School,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/school/add',
        name: 'AddSchool',
        component: SchoolAdd,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/school/edit/:id',
        name: 'EditSchool',
        component: SchoolEdit,
        meta: {
            requireAuth: true
        }
    },

    /**
     * 教师部分操作路由
     */
    {
        path: '/teacher',
        name: 'Teacher',
        component: Teacher,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/teacher/add',
        name: 'AddTeacher',
        component: TeacherAdd,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/teacher/edit/:id',
        name: 'EditTeacher',
        component: TeacherEdit,
        meta: {
            requireAuth: true
        }
    },
    

    /**
     * 学生部分操作路由
     */
    {
        path: '/student',
        name: 'Student',
        component: Student,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/student/add',
        name: 'AddStudent',
        component: StudentAdd,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/student/edit/:id',
        name: 'EditStudent',
        component: StudentEdit,
        meta: {
            requireAuth: true
        }
    },
    

    /**
     * 年级部分操作路由
     */
    {
        path: '/grade',
        name: 'Grade',
        component: Grade,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/grade/add',
        name: 'AddGrade',
        component: GradeAdd,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/grade/edit/:id',
        name: 'EditGrade',
        component: GradeEdit,
        meta: {
            requireAuth: true
        }
    },
    

    /**
     * 年级部分操作路由
     */
    {
        path: '/class',
        name: 'Class',
        component: Class,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/class/add',
        name: 'AddClass',
        component: ClassAdd,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/class/edit/:id',
        name: 'EditClass',
        component: ClassEdit,
        meta: {
            requireAuth: true
        }
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