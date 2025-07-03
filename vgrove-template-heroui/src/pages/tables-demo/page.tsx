import { useI18n } from '@gulibs/vgrove-client';
import {
    I18nMessage,
    PageContainer
} from '@gulibs/vgrove-ui';
import type { ChipProps, Selection, SortDescriptor } from '@heroui/react';
import {
    Button,
    Chip,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    User
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useCallback, useMemo, useState } from 'react';

// 示例数据
const users = [
    {
        id: 1,
        name: "zhangsan",
        role: "administrator",
        team: "development",
        status: "active",
        age: 29,
        avatar: "https://ui-avatars.com/api/?name=张三&background=3b82f6&color=fff&size=150",
        email: "zhangsan@example.com",
        phone: "13800138001"
    },
    {
        id: 2,
        name: "lisi",
        role: "developer",
        team: "product",
        status: "paused",
        age: 25,
        avatar: "https://ui-avatars.com/api/?name=李四&background=10b981&color=fff&size=150",
        email: "lisi@example.com",
        phone: "13800138002"
    },
    {
        id: 3,
        name: "wangwu",
        role: "designer",
        team: "design",
        status: "active",
        age: 28,
        avatar: "https://ui-avatars.com/api/?name=王五&background=8b5cf6&color=fff&size=150",
        email: "wangwu@example.com",
        phone: "13800138003"
    },
    {
        id: 4,
        name: "zhaoliu",
        role: "tester",
        team: "testing",
        status: "vacation",
        age: 26,
        avatar: "https://ui-avatars.com/api/?name=赵六&background=f59e0b&color=fff&size=150",
        email: "zhaoliu@example.com",
        phone: "13800138004"
    },
    {
        id: 5,
        name: "sunqi",
        role: "productManager",
        team: "product",
        status: "active",
        age: 32,
        avatar: "https://ui-avatars.com/api/?name=孙七&background=ef4444&color=fff&size=150",
        email: "sunqi@example.com",
        phone: "13800138005"
    },
    {
        id: 6,
        name: "zhouba",
        role: "operations",
        team: "operations",
        status: "active",
        age: 24,
        avatar: "https://ui-avatars.com/api/?name=周八&background=6366f1&color=fff&size=150",
        email: "zhouba@example.com",
        phone: "13800138006"
    },
    {
        id: 7,
        name: "wujiu",
        role: "sales",
        team: "sales",
        status: "paused",
        age: 30,
        avatar: "https://ui-avatars.com/api/?name=吴九&background=14b8a6&color=fff&size=150",
        email: "wujiu@example.com",
        phone: "13800138007"
    }
];

// 状态配置
const statusColorMap: Record<string, ChipProps["color"]> = {
    active: "success",
    paused: "danger",
    vacation: "warning",
} as const;

export default function TablesDemo() {
    const { t } = useI18n();
    const [filterValue, setFilterValue] = useState("");
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
    const [statusFilter, setStatusFilter] = useState<Selection>("all");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = useState(1);

    const statusOptions = useMemo(() => [
        { name: t("common.tables.statusOptions.active"), uid: "active" },
        { name: t("common.tables.statusOptions.paused"), uid: "paused" },
        { name: t("common.tables.statusOptions.vacation"), uid: "vacation" },
    ], [t]);

    // 表格列配置
    const columns = useMemo(() => [
        { name: t("common.tables.columns.user"), uid: "name", sortable: true },
        { name: t("common.tables.columns.role"), uid: "role", sortable: true },
        { name: t("common.tables.columns.status"), uid: "status", sortable: true },
        { name: t("common.tables.columns.age"), uid: "age", sortable: true },
        { name: t("common.tables.columns.team"), uid: "team" },
        { name: t("common.tables.columns.actions"), uid: "actions" },
    ], [t]);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = useMemo(() => {
        return columns;
    }, [columns]);

    const filteredItems = useMemo(() => {
        let filteredUsers = [...users];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                t(`tables.users.${user.name}`).toLowerCase().includes(filterValue.toLowerCase()) ||
                user.email.toLowerCase().includes(filterValue.toLowerCase())
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.status)
            );
        }

        return filteredUsers;
    }, [filterValue, statusFilter, hasSearchFilter, t, statusOptions.length]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a] as number;
            const second = b[sortDescriptor.column as keyof typeof b] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = useCallback((user: typeof users[0], columnKey: React.Key) => {
        const cellValue = user[columnKey as keyof typeof user];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.avatar }}
                        description={user.email}
                        name={t(`tables.users.${user.name}`)}
                    >
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{t(`tables.roles.${user.role}`)}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{t(`tables.teams.${user.team}`)}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {t(`tables.statusOptions.${user.status}`)}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light" aria-label="User actions">
                                    <Icon icon="solar:menu-dots-vertical-line-duotone" width={16} />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem key="view" startContent={<Icon icon="solar:eye-line-duotone" width={16} />}>
                                    {t("common.tables.view")}
                                </DropdownItem>
                                <DropdownItem key="edit" startContent={<Icon icon="solar:pen-line-duotone" width={16} />}>
                                    {t("common.tables.edit")}
                                </DropdownItem>
                                <DropdownItem
                                    key="delete"
                                    className="text-danger"
                                    color="danger"
                                    startContent={<Icon icon="solar:trash-bin-minimalistic-line-duotone" width={16} />}
                                >
                                    {t("common.tables.delete")}
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, [t]);

    const onNextPage = useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const topContent = useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder={t("common.tables.searchPlaceholder")}
                        startContent={<Icon icon="solar:magnifer-line-duotone" />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<Icon icon="solar:alt-arrow-down-line-duotone" />} variant="flat">
                                    {t("common.tables.status")}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label={t("common.tables.statusFilterLabel")}
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {status.name}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button color="primary" endContent={<Icon icon="solar:add-circle-line-duotone" />}>
                            {t("common.tables.addUser")}
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">{t("common.tables.userManagement")} {users.length} {t("common.total")}</span>
                    <label className="flex items-center text-default-400 text-small">
                        {t("common.itemsPerPage")}:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        onSearchChange,
        onClear,
        onRowsPerPageChange,
        t,
        statusOptions,
    ]);

    const bottomContent = useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <span className="w-[30%] text-small text-default-400">
                    {selectedKeys === "all"
                        ? t("common.tables.allSelectedMessage")
                        : `${selectedKeys.size} ${t("common.tables.itemsSelected")}`}
                </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                        {t("common.previous")}
                    </Button>
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                        {t("common.next")}
                    </Button>
                </div>
            </div>
        );
    }, [selectedKeys, page, pages, onPreviousPage, onNextPage, t]);

    return (
        <PageContainer>
            <div className="space-y-8">
                {/* 页面标题 */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">
                        <I18nMessage id="common.demo.tables.title" />
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        <I18nMessage id="common.demo.tables.subtitle" />
                    </p>
                </div>
                {/* 用户管理表格 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                            <I18nMessage id="common.tables.userManagement" />
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            <I18nMessage id="common.demo.tables.subtitle" />
                        </p>
                    </div>

                    <Table
                        aria-label={t("common.tables.tableLabel")}
                        isHeaderSticky
                        bottomContent={bottomContent}
                        bottomContentPlacement="outside"
                        classNames={{
                            wrapper: "max-h-[382px]",
                        }}
                        selectedKeys={selectedKeys}
                        selectionMode="multiple"
                        sortDescriptor={sortDescriptor}
                        topContent={topContent}
                        topContentPlacement="outside"
                        onSelectionChange={setSelectedKeys}
                        onSortChange={setSortDescriptor}
                    >
                        <TableHeader columns={headerColumns}>
                            {(column) => (
                                <TableColumn
                                    key={column.uid}
                                    align={column.uid === "actions" ? "center" : "start"}
                                    allowsSorting={column.sortable}
                                >
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody emptyContent={t("common.tables.emptyMessage")} items={sortedItems}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* 简单表格示例 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                            <I18nMessage id="common.tables.simpleTableLabel" />
                        </h3>
                    </div>

                    <Table aria-label={t("common.tables.simpleTableLabel")}>
                        <TableHeader>
                            <TableColumn>{t("common.tables.name")}</TableColumn>
                            <TableColumn>{t("common.tables.role")}</TableColumn>
                            <TableColumn>{t("common.tables.status")}</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {users.slice(0, 3).map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{t(`tables.users.${user.name}`)}</TableCell>
                                    <TableCell>{t(`tables.roles.${user.role}`)}</TableCell>
                                    <TableCell>
                                        <Chip
                                            className="capitalize"
                                            color={statusColorMap[user.status]}
                                            size="sm"
                                            variant="flat"
                                        >
                                            {t(`tables.statusOptions.${user.status}`)}
                                        </Chip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* 表格功能特性 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:sort-line-duotone" className="text-2xl text-blue-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.tables.sortingFiltering" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.tables.sortingFilteringDesc" />
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:document-text-line-duotone" className="text-2xl text-green-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.tables.pagination" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.tables.paginationDesc" />
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:check-square-line-duotone" className="text-2xl text-purple-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.tables.selection" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.tables.selectionDesc" />
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:smartphone-line-duotone" className="text-2xl text-orange-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.tables.responsive" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.tables.responsiveDesc" />
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:settings-line-duotone" className="text-2xl text-red-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.tables.customCells" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.tables.customCellsDesc" />
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <Icon icon="solar:menu-dots-line-duotone" className="text-2xl text-cyan-500 mb-2" />
                            <h4 className="font-semibold">
                                <I18nMessage id="common.tables.actions" />
                            </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            <I18nMessage id="common.tables.actionsDesc" />
                        </p>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
} 