import { Activity, Bell, BookOpen, Building2, Check, ClipboardCheck, FileBarChart, LayoutDashboard, Settings, ShieldCheck, Users } from 'lucide-react'
import type { Classroom, Permission, Student, Teacher, NavItem, Role } from './types'

export const roleLabels: Record<Role, string> = { teacher: 'المعلمة', supervisor: 'مراقبة الدور', admin: 'إدارة المدرسة' }
export const initialPermissions: Permission[] = [
  { id: 1, student: 'جود محمد العتيبي', initials: 'جم', className: '3 / أ', destination: 'العيادة', status: 'out', checkout: '08:47 ص', expected: '09:15 ص' },
  { id: 2, student: 'سارة خالد القحطاني', initials: 'سك', className: '4 / ب', destination: 'الإدارة', status: 'out', checkout: '09:08 ص', expected: '09:30 ص', overdue: true },
  { id: 3, student: 'لينا عبدالله الحربي', initials: 'لع', className: '2 / أ', destination: 'دورة المياه', status: 'pending', expected: '09:35 ص' },
  { id: 4, student: 'ريم فهد الدوسري', initials: 'رف', className: '3 / أ', destination: 'المختبر', status: 'returned', checkout: '08:18 ص', expected: '08:40 ص' },
]
export const initialStudents: Student[] = [
  { id: 1, name: 'جود محمد العتيبي', schoolId: 'ST-1001', className: '3 / أ' },
  { id: 2, name: 'سارة خالد القحطاني', schoolId: 'ST-1002', className: '4 / ب' },
  { id: 3, name: 'لينا عبدالله الحربي', schoolId: 'ST-1003', className: '2 / أ' },
  { id: 4, name: 'ريم فهد الدوسري', schoolId: 'ST-1004', className: '3 / أ' },
]
export const initialTeachers: Teacher[] = [{ id: 1, name: 'أ. نورة العتيبي', className: '3 / أ' }, { id: 2, name: 'أ. مها القحطاني', className: '4 / ب' }, { id: 3, name: 'أ. هناء الدوسري', className: '' }]
export const initialClasses: Classroom[] = [{ id: 1, name: '3 / أ', grade: 'الصف الثالث', studentIds: [1, 4], teacherIds: [1] }, { id: 2, name: '4 / ب', grade: 'الصف الرابع', studentIds: [2], teacherIds: [2] }, { id: 3, name: '2 / أ', grade: 'الصف الثاني', studentIds: [3], teacherIds: [] }]
export const teacherNav: NavItem[] = [['teacher-home', 'لوحة المعلمة', LayoutDashboard], ['teacher-create', 'إنشاء استئذان', ClipboardCheck], ['teacher-active', 'النشطة والمعلقة', Activity], ['teacher-history', 'سجل الاستئذانات', FileBarChart]]
export const supervisorNav: NavItem[] = [['supervisor-home', 'لوحة مراقبة الدور', LayoutDashboard], ['supervisor-active', 'الاستئذانات النشطة', Activity], ['supervisor-overdue', 'الاستئذانات المتأخرة', Bell], ['supervisor-returns', 'متابعة عودة الطالبات', Check]]
export const adminNav: NavItem[] = [['admin-dashboard', 'لوحة الإدارة', LayoutDashboard], ['admin-students', 'إدارة الطالبات', Users], ['admin-teachers', 'إدارة المعلمات', BookOpen], ['admin-classes', 'إدارة الفصول', Building2], ['admin-users', 'المستخدمون والصلاحيات', ShieldCheck], ['admin-reports', 'التقارير', FileBarChart], ['admin-audit', 'سجل النشاط', Activity], ['admin-settings', 'إعدادات المدرسة', Settings]]
