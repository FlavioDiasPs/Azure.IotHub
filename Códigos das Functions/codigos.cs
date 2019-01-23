//ler MSG 




public static void Run(string myIoTHubMessage, ILogger log)
{
   

    log.LogInformation($"C# IoT Hub trigger function processed a message: {myIoTHubMessage}");

}

//Salvar ATS 
// usar Microsoft Azure Storage Explorer para ver os dados
//https://azure.microsoft.com/en-us/features/storage-explorer/


using System;

public static void Run(string myIoTHubMessage, ICollector<dados> ATST, ILogger log)
{
    ATST.Add( new dados() {    
        PartitionKey = "SensorSimulado",
        RowKey = (DateTime.MaxValue.Ticks - DateTime.UtcNow.Ticks).ToString(), // Guid.NewGuid().ToString("N"),
        Medidas = myIoTHubMessage
        });
    log.LogInformation($"C# IoT Hub trigger function processed a message: {myIoTHubMessage}");
}

public class dados
{
public string PartitionKey { get; set; }
public string RowKey { get; set;}
public string Medidas{get;set;}
}


// Power BI


using System;
using System.Net.Http;
using System.Text;
public static void Run(string myIoTHubMessage, ILogger log)
{
var httpClient = new HttpClient();
string APIPB = "";
httpClient.PostAsync(APIPB, new StringContent("[" + myIoTHubMessage + "]" , Encoding.UTF8, "application/json"));
log.LogInformation($"C# IoT Hub trigger function processed a message: {myIoTHubMessage}");
}
