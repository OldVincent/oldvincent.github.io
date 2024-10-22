---
title: Benchmark of Querying Special Dictionary Containers
icon: emojione:bar-chart
date: 2024-10-22
isOriginal: true
tag:
 - CSharp
 - Fundamentals
 - Containers
---

## Result

Querying 1,000,000 times with 1,000,000 elements:

|Container|Mean(ms)|Min(ms)|Max(ms)|Range|AllocatedBytes|Operations|Ratio of Mean(ms)|
|:--------|:------:|:-----:|:-----:|:---:|:------------:|:--------:|:---:|
|Dictionary|34.72|30.65|36.33|16%|170|656|1.00x|
|ConcurrentDictionary|129.94|128.51|131.43|2%|542|60|3.74x|
|ConditionalWeakTable|168.45|150.94|184.17|20%|542|236|4.85x|

Querying 1,000,000 times with 1,000 elements:

|Container|Mean(ms)|Min(ms)|Max(ms)|Range|AllocatedBytes|Operations|Ratio of Mean(ms)|
|:--------|:------:|:-----:|:-----:|:---:|:------------:|:--------:|:---:|
|Dictionary|11.99|11.95|12.03|1%|86|960|1.00x|
|ConcurrentDictionary|10.14|9.95|10.22|3%|93|960|0.84x|
|ConditionalWeakTable|10.98|10.87|11.08|2%|93|960|0.91x|

## Conclusion

For queries with a large number of items within dictionaries, special dictionaries (`ConcurrentDictionary<TKey, TValue>`, `ConditionalWeakTable<TKey, TValue>`) are significantly slower than `Dictionary<TKey, TValue>`.

However, if there are not too many items (~ 1,000 in this benchmark) in the dictionaries, their query performance is almost identical.

## Code

This is the code for benchmarking:

```csharp
#load "BenchmarkDotNet"

void Main()
{
	RunBenchmark();
}

public static int Count = 1_000;
public static int Queries = 1_000_000;

public class Sample
{
	public string Name;
}

public static readonly Dictionary<Sample, string> DictionaryData = new();

public static readonly ConcurrentDictionary<Sample, string> ConcurrentDictionaryData = new();

public static readonly ConditionalWeakTable<Sample, string> ConditionalWeakTableData = new();

public static HashSet<Sample> Keys = new();

[GlobalSetup]
public void Setup()
{
	for (var index = 0; index < Count; ++index)
	{
		var text = RandomString();
		var target = new Sample()
		{
			Name = text
		};
		Keys.Add(target);
		DictionaryData[target] = text;
		ConcurrentDictionaryData[target] = text;
		ConditionalWeakTableData.AddOrUpdate(target, text);
	}
	Console.WriteLine($"Keys Count: {Keys.Count}");
}

private static Random random = new Random();

public static string RandomString()
{
	var length = random.Next(5, 30);
	const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	return new string(Enumerable.Range(0, length)
		.Select(_ => chars[random.Next(chars.Length)]).ToArray());
}

[Benchmark]
public void Query_Dictionary()   // Benchmark methods must be public.
{
	var error = new HashSet<Sample>();
	
	for (int queries = 0; queries < Queries; queries += Keys.Count)
	{
		foreach (var key in Keys)
		{
			if (!DictionaryData.TryGetValue(key, out var text) || text != key.Name)
				error.Add(key);
		}
	}
}

[Benchmark]
public void Query_ConcurrentDictionary()
{
	var error = new HashSet<Sample>();
	for (int queries = 0; queries < Queries; queries += Keys.Count)
	{
		foreach (var key in Keys)
		{
			if (!ConcurrentDictionaryData.TryGetValue(key, out var text) || text != key.Name)
				error.Add(key);
		}
	}
}

[Benchmark]
public void Query_ConditionalWeakTable()
{
	var error = new HashSet<Sample>();
	for (int queries = 0; queries < Queries; queries += Keys.Count)
	{
		foreach (var key in Keys)
		{
			if (!ConditionalWeakTableData.TryGetValue(key, out var text) || text != key.Name)
				error.Add(key);
		}
	}
}
```