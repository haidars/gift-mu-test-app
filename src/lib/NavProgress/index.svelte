<script>
    import './nprogress.scss';
    import NProgress from 'nprogress';
    import { navigating } from '$app/stores';

    NProgress.configure({
        minimum: 0.2,
        showSpinner: true,
    });

    $: if ($navigating) {
        NProgress.start();
    }
    $: if (!$navigating) {
        NProgress.done();
    }
</script>
