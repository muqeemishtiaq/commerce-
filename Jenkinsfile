pipeline {
    agent any

    envionment {
        VERCEL_TOKEN = credentials('vercel_token')
    }
    stages {
        stage('Install ') {
            steps {
               bat 'npm install'
            }
        }
        stage('Test ') {
            steps {
               echo 'Skipping tests...-no test scripts found'
            }
        }
        stage('Build ') {
            steps {
               bat 'npm run build'
            }
        }
        stage('Deploy ') {
            steps {
               bat 'npx vercel --prod --token $VERCEL_TOKEN'
            }
        }
    }
}
