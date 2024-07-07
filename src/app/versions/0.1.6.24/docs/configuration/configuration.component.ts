import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block.component';

@Component({
  selector: 'app-config-docs',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './configuration.component.html'
})
export class ConfigurationDocsComponent {
  code_01 = 
`
{
  "Server": {
    "Ip": "127.0.0.1",
    "Port": 80
  },
  "Database": {
    "Host": ":memory:",
    "Port": null,
    "Name": "sqlite",
    "Connection": "Data Source=:memory:;Version=3;New=True;"
  },
  "Logging": {
    "EnableMonitor": true,
    "EnableConsole": true
  },
  "Certificate": {
    "KeyPath": "if_not_exist_ignore_certification_for_https",
    "CertPath": "certs/cert.pem"
  },
  "UniqueThread": false,
  "Locale": "en-US"
}
`;

  code_02 =
`
using Silk;
using Silk.Core.server;

public static async Task launchWithConfig(string[] args)
{
    var configuration = new SilkConfiguration()
    {
        Certificate = new Certificate()
        {
            CertPath = "path/to/certificate",
            KeyPath = "path/to/key"
        },
        Database = new DatabaseConfig()
        {
            Host = "localhost",
            Name = "databaseName",
            Port = 3306,
            Connection = "connectionString..."
        },
        Server = new ServerConfig()
        {
            Ip = "127.0.0.1",
            Port = 8080
        },
        Loggin = new LogginConfig()
        {
            EnableConsole = true,
            EnableMonitor = true
        },
        UniqueThread = false,
        Locale = "en-US"
    };


    var server = new SilkServer(configuration);

    Console.CancelKeyPress += (sender, e) =>
    {
        e.Cancel = true;
        server.Stop();
    };
    await server.StartAsync();
}
`;
}
