
<template>
  <div class="searchBar">
    <!-- Filter Search -->
    <div class="input-group mb-5">
      <input
        type="search"
        class="form-control"
        v-model="searchQuery"
        placeholder="search users"
        aria-label="users"
        aria-describedby="button-addon2"
      />
    </div>
  </div>

  <table id="tableComponent" class="table table-bordered table-striped">
    <thead>
      <tr>
        <!-- loop through each value of the fields to get the table header -->
        <th v-for="field in fields" :key="field" @click="sortTable(field)">
          {{ field }}
          <i class="bi bi-sort-alpha-down" aria-label="Sort Icon"></i>
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- Loop through the list get the each student data -->
      <tr v-for="item in filteredList" :key="item">
        <td @click="$emit('gotoAdmin', item.id)" v-for="field in fields" :key="field">{{ item[field] }}</td>
      </tr>
      <tr v-if="filteredList.length === 0"><div class="empty-list" >Network issues or list is empty</div></tr>
    </tbody>
  </table>
</template>
<script>
import { computed, ref} from "vue";
// Importing  the lodash library
import { sortBy } from "lodash";

export default {
  name: "UserList",
  props: {
    userList: {
      type: Array,
    },
    fields: {
      type: Array,
    },
  },
  

  setup(props) {
   
    let sort = ref(false);
    let updatedList = ref([]);
    let searchQuery = ref("");

    // a function to sort the table
    const sortTable = (col) => {
      sort.value = true;
      // Use of _.sortBy() method
      updatedList.value = sortBy(props.userList, col);
    };
    const sortedList = computed(() => {
      if (sort.value) {
        return updatedList.value;
      } else {
        return props.userList;
      }
    });
    // const emit = defineEmits(['goto'])
    // const goto = (id)=> {
    //   console.log(id,"1")
    //   emit("goto", id)

    // }
    // Filter Search
    const filteredList = computed(() => {
      return sortedList.value.filter((user) => {
        return (
          user.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
          -1
        );
      });
    });

    return { sortedList, sortTable, searchQuery, filteredList };
  },
};
</script>
<style scoped>
table th:hover {
  background: #f2f2f2;
}
table tr:hover {
  background: #f2f2f2;
}
.table{
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}
.empty-list{
  text-align: center;
}
.input-group{
  width: 30% !important;
}
</style>