const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
    if (IS_DEV) {
        return 'com.adilsongb.moneyfy.dev';
    }

    if (IS_PREVIEW) {
        return 'com.adilsongb.moneyfy.preview';
    }

    return 'com.adilsongb.moneyfy';
};

const getAppName = () => {
    if (IS_DEV) {
        return 'Moneyfy Dev';
    }

    if (IS_PREVIEW) {
        return 'Moneyfy Test';
    }

    return 'Moneyfy';
};

const getIcon = () => {
    if (IS_DEV) {
        return './assets/images/icon-dev.png';
    }

    if (IS_PREVIEW) {
        return './assets/images/icon-preview.png';
    }

    return './assets/images/icon.png';
};

const getAdaptiveIcon = () => {
    if (IS_DEV) {
        return './assets/images/adaptive-icon-dev.png';
    }

    if (IS_PREVIEW) {
        return './assets/images/adaptive-icon-preview.png';
    }

    return './assets/images/adaptive-icon.png';
};

export default {
    expo: {
        name: getAppName(),
        slug: 'moneyfy',
        version: '1.0.0',
        orientation: 'portrait',
        icon: getIcon(),
        scheme: 'moneyfy',
        userInterfaceStyle: 'automatic',
        newArchEnabled: true,
        ios: {
            supportsTablet: true,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: getAdaptiveIcon(),
                backgroundColor: '#7E40D6',
            },
            edgeToEdgeEnabled: true,
            package: getUniqueIdentifier(),
        },
        plugins: [
            'expo-router',
            [
                'expo-font',
                {
                    fonts: [
                        './assets/fonts/Rubik-Regular.ttf',
                        './assets/fonts/Rubik-Medium.ttf',
                        './assets/fonts/Rubik-Bold.ttf',
                    ],
                },
            ],
            [
                'expo-splash-screen',
                {
                    image: './assets/images/splash-icon.png',
                    imageWidth: 200,
                    resizeMode: 'contain',
                    backgroundColor: '#7E40D6',
                },
            ],
            'expo-web-browser',
        ],
        experiments: {
            typedRoutes: true,
        },
        extra: {
            router: {
                origin: false,
            },
            eas: {
                projectId: '90f674d9-2af9-426c-baae-00b4bcec8160',
            },
        },
        owner: 'adilsongb',
    },
};
