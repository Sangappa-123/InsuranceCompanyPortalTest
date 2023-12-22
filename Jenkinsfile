pipeline {
    agent any
    
    stages {
        // stage('Checkout') {
        //     steps {
        //         // Assuming your repository is https://github.com/your/repo.git
        //         git 'https://github.com/Sangappa-123/InsuranceCompanyPortalTest.git'
        //     }
        // }

        stage('Build') {
            steps {
                script {
                    // Overwrite the configuration file
                    writeFile file: 'config/configuration.json', text: '''
                        {
                "data": {
                    "insuranceCarrier":"Openly Insurance Company",
                    "serverAddress": "http://45.79.5.228:8080",
                    "Xoriginator": "http://45.79.5.228:8080/openly",
                    "apiurl": "/ArtigemRS-FI/api/",
                     "AdminApiurl": "/ArtigemRS-FI_Admin/api/",
                    "receipturl": "/",
                    "ExportUrl": "",
                    "ClaimTemplate": "/ArtigemRS-FI/artigem/templates/ClaimDetails.xlsx",
                    "ItemTemplate": "/ArtigemRS-FI/artigem/templates/postloss_Items.xlsx",
                    "VendorDetailsTemplate": "/ArtigemRS-FI/artigem/templates/VendorCatalogUpload.xlsx",
                    "UserDetailsTemplate": "/ArtigemRS-FI/artigem/templates/UserDetails.xlsx",
                     "bestbuyUrl":"https://api.bestbuy.com/v1/products",
                    "claimProfile": "Contents",
                     "serviceRequests" : "true",
                    "jewelryVendor": "ARTGM",
                    "speedCheckVendor": "ARTGM",
                     "hideCaptcha":"true",
                    "SpeedCheckApiurl": "http://45.79.5.228:8080/SpeedCheck_App/api/",
                   "gemGuideApi":"false",
                   "googleShoppingDropdown":"true",
                    "ThirdPartyAdjusting" : "false",
                    "loginWithSSO":"false"
                }
                        }
                    '''
                }
            }
        }

        // Add more stages as needed

        stage('Deploy') {
            steps {
                echo "Deployment stage"
            }
        }
    }
}
