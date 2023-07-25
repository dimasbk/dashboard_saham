import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/sass/app.scss",
                "resources/js/app.js",
                "resources/css/landingPage.css",
                "resources/sass/landingPage.scss",
                "resources/js/landingPage.js",
                "resources/css/analyst.css",
                "resources/css/animate.css",
                "resources/css/article.css",
                "resources/css/fundamental.css",
                "resources/css/landing.css",
                "resources/css/newsArticle.css",
                "resources/css/plan.css",
                "resources/css/search.css",
                "resources/css/template.css",
                "resources/css/userProfile.css",
                "resources/js/analyst.js",
                "resources/js/chart.js",
                "resources/js/editPortofolioBeli.js",
                "resources/js/editPortofolioJual.js",
                "resources/js/editPost.js",
                "resources/js/emitenAdmin.js",
                "resources/js/fundamentalBank.js",
                "resources/js/landing.js",
                "resources/js/main.js",
                "resources/js/portofolioBeli.js",
                "resources/js/portofolioJual.js",
                "resources/js/post.js",
                "resources/js/search.js",
                "resources/js/stockData.js",
                "resources/js/subscribe.js",
                "resources/js/technical.js",
                "resources/js/template.js",
                "resources/sass/_variables.scss",
                "resources/sass/chart.scss",
                "resources/sass/home.scss",
                "resources/sass/landing.scss",
                "resources/sass/landingPage.scss",
                "resources/sass/newsArticle.scss",
                "resources/sass/post.scss",
                "resources/sass/style.scss",
                "resources/js/chartTechnical.js",
                "resources/js/chartFundamental.js",
            ],
            refresh: true,
        }),
    ],
});
