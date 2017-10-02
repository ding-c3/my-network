while true; do
    curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"c3smartContract": "resource:org.acme.mynetwork.C3SmartContract#giveFish1" }' 'http://localhost:3000/api/C3SmartContractTransaction';
    curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"c3smartContract": "resource:org.acme.mynetwork.C3SmartContract#giveFish2" }' 'http://localhost:3000/api/C3SmartContractTransaction';
    curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"c3smartContract": "resource:org.acme.mynetwork.C3SmartContract#giveFish3" }' 'http://localhost:3000/api/C3SmartContractTransaction';
    curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"c3smartContract": "resource:org.acme.mynetwork.C3SmartContract#giveFish4" }' 'http://localhost:3000/api/C3SmartContractTransaction';
    curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"c3smartContract": "resource:org.acme.mynetwork.C3SmartContract#giveFish5" }' 'http://localhost:3000/api/C3SmartContractTransaction';
    sleep 8;
done