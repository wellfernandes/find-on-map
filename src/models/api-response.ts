interface ApiResponse {
    by: string;
    valid_key: boolean;
    results: Results;
    execution_time: number;
    from_cache: boolean;
}