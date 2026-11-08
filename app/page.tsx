'use client'

import { useState } from 'react'
import { CreatePermissionDialog } from '@/components/idhnik/create-permission'
import { AdminWorkspace } from '@/components/idhnik/admin'
import { SupervisorWorkspace } from '@/components/idhnik/supervisor'
import { TeacherWorkspace } from '@/components/idhnik/teacher'
import { ConfirmDialog, Shell } from '@/components/idhnik/shared'
import { initialClasses, initialPermissions, initialStudents, initialTeachers } from '@/lib/idhnik/mock-data'
import { cancelPermission, checkoutPermission, createPermissionRecords, returnPermission } from '@/lib/idhnik/permissions'
import type { Classroom, Permission, Role, Student, Teacher } from '@/lib/idhnik/types'

export default function Page() {
  const [role, setRole] = useState<Role>('teacher')
  const [active, setActive] = useState('teacher-home')
  const [permissions, setPermissions] = useState<Permission[]>(initialPermissions)
  const [students, setStudents] = useState<Student[]>(initialStudents)
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers)
  const [classes, setClasses] = useState<Classroom[]>(initialClasses)
  const [showCreate, setShowCreate] = useState(false)
  const [cancelId, setCancelId] = useState<number | null>(null)
  const [toast, setToast] = useState('')
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2600) }
  const onRole = (nextRole: Role) => { setRole(nextRole); setActive(nextRole === 'teacher' ? 'teacher-home' : nextRole === 'supervisor' ? 'supervisor-home' : 'admin-dashboard') }
  const onCreate = (names: string[], destination: string) => { setPermissions((items) => createPermissionRecords(items, names, destination)); setShowCreate(false); notify(`تم إنشاء ${names.length} أذونات مستقلة`) }
  const adminSection = active.startsWith('admin-') ? active : 'admin-dashboard'
  return <Shell role={role} active={active} onRole={onRole} onNavigate={setActive}>{role === 'admin' ? <AdminWorkspace section={adminSection} students={students} setStudents={setStudents} teachers={teachers} setTeachers={setTeachers} classes={classes} setClasses={setClasses} onToast={notify} /> : role === 'supervisor' ? <SupervisorWorkspace permissions={permissions} onReturn={(id) => { setPermissions((items) => returnPermission(items, id)); notify('تم تسجيل عودة الطالبة') }} /> : <TeacherWorkspace permissions={permissions} onCreate={() => setShowCreate(true)} onCheckout={(id) => { setPermissions((items) => checkoutPermission(items, id)); notify('تم تسجيل خروج الطالبة') }} onReturn={(id) => { setPermissions((items) => returnPermission(items, id)); notify('تم تسجيل عودة الطالبة') }} onCancel={setCancelId} />}{showCreate && <CreatePermissionDialog onClose={() => setShowCreate(false)} onCreate={onCreate} />}{cancelId !== null && <ConfirmDialog title="إلغاء طلب الاستئذان؟" description="سيتم تغيير الحالة إلى ملغي. لا يمكن إلغاء الطلب بعد تسجيل الخروج." onCancel={() => setCancelId(null)} onConfirm={() => { setPermissions((items) => cancelPermission(items, cancelId)); setCancelId(null); notify('تم إلغاء الطلب') }} />}{toast && <div role="status" className="fixed bottom-6 right-6 z-[60] rounded-xl bg-[#172033] px-4 py-3 text-sm font-semibold text-white shadow-xl">{toast}</div>}</Shell>
}
