import type { Permission } from './types'
export function checkoutPermission(items: Permission[], id: number): Permission[] { return items.map((item) => item.id === id && item.status === 'pending' ? { ...item, status: 'out', checkout: '09:32 ص' } : item) }
export function returnPermission(items: Permission[], id: number): Permission[] { return items.map((item) => item.id === id && item.status === 'out' ? { ...item, status: 'returned', overdue: false } : item) }
export function cancelPermission(items: Permission[], id: number): Permission[] { return items.map((item) => item.id === id && item.status === 'pending' ? { ...item, status: 'cancelled' } : item) }
export function createPermissionRecords(items: Permission[], students: string[], destination: string): Permission[] { return [...students.map((student, index) => ({ id: Date.now() + index, student, initials: student.slice(0, 2), className: '3 / أ', destination, status: 'pending' as const, expected: '09:45 ص' })), ...items] }
