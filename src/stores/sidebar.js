import { ref } from 'vue';

const isSidebarVisible = ref(false);

const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
};

const closeSidebar = () => {
    isSidebarVisible.value = false;
};

export const useSidebarStore = () => {
    return {
        isSidebarVisible,
        toggleSidebar,
        closeSidebar,
    };
};
