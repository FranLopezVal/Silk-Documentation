import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block.component';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './gettingstarted.component.html'
})
export class gettingstartedComponent {
  net8_link = 'https://dotnet.microsoft.com/en-us/download/dotnet/8.0';

  code_01 = 'dotnet new console --framework net8.0';
  code_02 = 'dotnet build';
  code_03 = 'dotnet add package SilkFramework --version 0.1.6.24';


  code_04 = 
  `
  // Using a Async Function to start the server
  public static async Task launch(string[] args)
  {
      var server = Silk.Silk.GenericServer;

      Console.CancelKeyPress += (sender, e) =>
      {
          e.Cancel = true;
          server.Stop();
      };

      await server.StartAsync();
  }

  // In main file, typically Program.cs, or directly in the main file if you use .NET high lever instructions
  // Put this in the main function
  await launch(args);
  `;
}
