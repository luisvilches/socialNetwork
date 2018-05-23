module.exports = {

    get(req,res) {
        const data = {
            name: 'Something Else' 
        }
        req.vueOptions = {
            head: {
                title: 'Luisvilches',
                metas: [
                    { property:'og:title', content: 'Page Title'},
                    { name:'twitter:title', content: 'Page Title'},
                ]
            }    
        }
        res.renderVue('pages/home.vue', data, req.vueOptions);
    },

    post(req,res){

    }
};