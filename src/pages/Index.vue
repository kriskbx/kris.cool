<template>
    <Layout>
        <Inner>
            <div class="work">
                <h2 class="work__title">Work*</h2>
                <WorkItem :color="edge.node.color"
                          :content="edge.node.content"
                          :excerpt="edge.node.excerpt"
                          :key="edge.node.url"
                          :tags="edge.node.tags"
                          :title="edge.node.title"
                          :url="edge.node.url"
                          :url_label="edge.node.url_label"
                          v-for="edge in $static.work.edges"/>
              <p class="work__addendum">
                *This list is unfortunately not up-to-date. There were so many fascinating challenges and projects I worked on recently, but you know how it is: Writing them down and keeping everything up-to-date is quite a lot of work. Stay tuned, I'll hope to update this section very soon&trade;.
              </p>
            </div>
        </Inner>
    </Layout>
</template>

<script>
    import Inner from "@/components/Inner"
    import WorkItem from "@/components/WorkItem"

    export default {
        components: {
            Inner, WorkItem,
        },

        metaInfo: {
            title: 'Hej'
        },
    }
</script>

<static-query>
    query {
        work: allWork(sortBy: "order", order: ASC) {
            edges {
                node {
                    id
                    title
                    excerpt
                    content
                    url
                    url_label
                    color
                    tags
                }
            }
        }
    }
</static-query>

<style lang="scss">
    .work {
        margin-top: 8rem;
        margin-bottom: 14rem;

        &__title {
            text-align: center;
            color: $colorGrey;
            margin-bottom: 4rem;
        }

        &__addendum {
          font-size: .875rem;
          padding: 0 2rem;
        }
    }
</style>
