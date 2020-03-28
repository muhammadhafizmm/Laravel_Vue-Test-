<template>
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Categories</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Categories</li>
            </ol>
            <div class="row">
                <div class="col-xl">
                    <div class="card mb-4">
                        <div class="card-header d-flex">
                            <span>
                                <i class="fas fa-chart-area mr-1"></i>
                                Catagories Management
                            </span>
                            <button class="btn btn-primary bt-sm ml-auto" v-on:click="showNewCategoryModal"><span class="fa fa-plus"></span> Create New</button>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Image</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Shirt</td>
                                        <td>Image</td>
                                        <td><button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
                                            <button class="btn btn-danger btn-sm"><span class="fa fa-trash"></span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal ref="newCategoryModal" id="bv-modal-example" hide-footer title="using Component Methods">
            <div class="d-block text-center">
                <form v-on:submit.prevent="createCategory">
                    <div class="form-group">
                        <label for="name">Name :</label>
                        <input type="text" class="form-control" v-model="categoryData.name" id="name" placeholder="Please Enter Category Name">
                    </div>
                    <div class="form-group">
                        <label for="image">Coise an image :</label>
                        <input type="file" class="form-control" v-on:change='attachImage' id="image" placeholder="Please Enter Category Name">
                    </div>
                    <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">Cancel</button>
                    <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Save</button>
                </form>
            </div>
        </b-modal>
    </main>
</template>

<script>
    export default {
        name: 'category',
        data(){
            return {
                categoryData: {
                    name: '',
                    image: ''
                }
            }
        },
        methods: {
            attachImage(){

            },
            hideNewCategoryModal(){
                this.$refs.newCategoryModal.hide();
            },
            showNewCategoryModal(){
                this.$refs.newCategoryModal.show();
            },
            createCategory(){
                console.log('form submited')
            }
        },
    }
</script>